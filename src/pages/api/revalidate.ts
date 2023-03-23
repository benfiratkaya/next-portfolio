/**
 * This code is responsible for revalidating the cache when a post or author is updated.
 *
 * It is set up to receive a validated GROQ-powered Webhook from Sanity.io:
 * https://www.sanity.io/docs/webhooks
 *
 * 1. Go to the API section of your Sanity project on sanity.io/manage or run `npx sanity hook create`
 * 2. Click "Create webhook"
 * 3. Set the URL to https://YOUR_NEXTJS_SITE_URL/api/revalidate
 * 4. Trigger on: "Create", "Update", and "Delete"
 * 5. Filter: _type == "post" || _type == "author" || _type == "settings"
 * 6. Projection: Leave empty
 * 7. HTTP method: POST
 * 8. API version: v2021-03-25
 * 9. Include drafts: No
 * 10. HTTP Headers: Leave empty
 * 11. Secret: Set to the same value as SANITY_REVALIDATE_SECRET (create a random one if you haven't)
 * 12. Save the cofiguration
 * 13. Add the secret to Vercel: `npx vercel env add SANITY_REVALIDATE_SECRET`
 * 14. Redeploy with `npx vercel --prod` to apply the new environment variable
 */

import { apiVersion, dataset, projectId } from '@/sanity/env'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient, groq, type SanityClient } from 'next-sanity'
import { type ParseBody, parseBody } from 'next-sanity/webhook'

export { config } from 'next-sanity/webhook'
const { locales } = i18nConfig;
export default async function revalidate(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { body, isValidSignature } = await parseBody(
            req,
            process.env.SANITY_REVALIDATE_SECRET
        )
        if (isValidSignature === false) {
            const message = 'Invalid signature'
            console.log(message)
            return res.status(401).send(message)
        }

        if (typeof body._id !== 'string' || !body._id) {
            const invalidId = 'Invalid _id'
            console.error(invalidId, { body })
            return res.status(400).send(invalidId)
        }

        const staleRoutes = await queryStaleRoutes(body as any)
        await Promise.all(staleRoutes.map((route) => res.revalidate(route)))

        const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
        console.log(updatedRoutes)
        return res.status(200).send(updatedRoutes)
    } catch (err) {
        console.error(err)
        return res.status(500).send(err.message)
    }
}

type StaleRoute =
    `/` |
    `/${string}` |
    `/about` |
    `/${string}/about` |
    `/blog` |
    `/${string}/blog` |
    `/blog/${string}` |
    `/${string}/blog/${string}` |
    `/blog/categories/${string}` |
    `/${string}/blog/categories/${string}` |
    `/projects` |
    `/${string}/projects` |
    `/projects/${string}` |
    `/${string}/projects/${string}`

async function queryStaleRoutes(
    body: Pick<ParseBody['body'], '_type' | '_id' | 'date' | 'slug' | 'categories'>
): Promise<StaleRoute[]> {
    const client = createClient({ projectId, dataset, apiVersion, useCdn: false })

    // Handle possible deletions
    const exists = await client.fetch(groq`*[_id == $id][0]`, { id: body._id })
    if (!exists) {
        const slug = (body.slug as any)?.current;
        let staleRoutes: StaleRoute[] = [];
        switch (body._type) {
            case 'post':
                staleRoutes = mergeLocales(['/blog'])
                if (slug) {
                    const blogCategories = body.categories as any;
                    if (blogCategories) {
                        const categoryRefs = blogCategories.map((category: any) => category._ref);
                        const slugs = await Promise.all(
                            categoryRefs.map((categoryRef: any) => {
                                return client.fetch(groq`
                                    *[_type == "blogCategory" && _id == $id].slug.current
                                  `, { id: categoryRef });
                            })
                        );
                        staleRoutes.push(...mergeLocales(slugs.map(slug => `/blog/categories/${slug}`)));
                    }

                    staleRoutes.push(...mergeLocales([`/blog/${slug}`]));
                }
                return staleRoutes;
            case 'blogCategory':
                if (slug) staleRoutes = mergeLocales([`/blog/categories/${slug}`]);
                return staleRoutes;
            case 'project':
                staleRoutes = mergeLocales(['/projects'])
                if (slug) staleRoutes.push(...mergeLocales([`/blog/${slug}`]));
                return staleRoutes;
            case 'projectCategory':
                staleRoutes = mergeLocales(['/projects'])
                return staleRoutes;
        }
    }

    switch (body._type) {
        case 'home':
            return mergeLocales(['/']);
        case 'about':
            return mergeLocales(['/about']);
        case 'post':
            return mergeLocales(await queryStalePostRoutes(client, body._id))
        case 'blogCategory':
            return mergeLocales(await queryStaleBlogCategoryRoutes(client, body._id))
        case 'project':
            return mergeLocales(await queryStaleProjectRoutes(client, body._id))
        case 'projectCategory':
            return mergeLocales(['/projects']);
        default:
            throw new TypeError(`Unknown type: ${body._type}`)
    }
}

function mergeLocales(routes: string[]): StaleRoute[] {
    const mergedRoutes = [];

    for (const route of routes) {
        for (const locale of locales) {
            mergedRoutes.push(`/${locale}${route}` as StaleRoute);
        }
    }

    return mergedRoutes;
}

async function queryStalePostRoutes(
    client: SanityClient,
    id: string
): Promise<StaleRoute[]> {
    let slugs = await client.fetch(groq`
        *[_type == "post" && _id == $id].slug.current
    `, { id })
    let categorySlugs = await client.fetch(groq`
        *[_type == "post" && _id == $id] {
          categories[]->{
            "slug": slug.current
          }
        }[0]["categories"]
    `, { id })

    return [
        '/blog',
        ...slugs.map((slug) => `/blog/${slug}`),
        ...categorySlugs.map((category) => `/blog/categories/${category.slug}`),
    ]
}

async function queryStaleBlogCategoryRoutes(
    client: SanityClient,
    id: string
): Promise<StaleRoute[]> {
    let slugs = await client.fetch(groq`
        *[_type == "blogCategory" && _id == $id].slug.current
    `, { id })
    let postSlugs = await client.fetch(groq`
        *[_type == "blogCategory" && _id == $id] {
          "slug": *[_type == "post" && references(^._id)].slug.current
        }["slug"][]
    `, { id })

    return [
        '/blog',
        ...slugs.map((slug) => `/blog/categories/${slug}`),
        ...postSlugs.map((slug) => `/blog/${slug}`),
    ]
}

async function queryStaleProjectRoutes(
    client: SanityClient,
    id: string
): Promise<StaleRoute[]> {
    let slugs = await client.fetch(groq`
        *[_type == "project" && _id == $id].slug.current
    `, { id })

    return ['/projects', ...slugs.map((slug) => `/projects/${slug}`)]
}