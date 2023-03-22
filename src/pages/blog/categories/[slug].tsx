import React from "react";
import {NextSeo} from "next-seo";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import {GetStaticProps} from "next";
import {getBlogCategoryBySlug, getPostsByCategory, getBlogCategoryPaths, getBlogCategories} from "@/sanity/lib/client";
import {getPaths} from "@/sanity/lib/links";
import {Post, BlogCategory} from "@/sanity/types";
import {BLOG_TEMPLATE, siteTitle} from "@/helpers/siteTitle";
import PageTitle from "@/components/PageTitle";
import PageDescription from "@/components/PageDescription";
import CategoryList from "@/components/CategoryList";
import SearchForm from "@/components/SearchForm";
import NoData from "@/components/NotData";

type PageProps = {
    category: BlogCategory
    posts: Post[]
    categories: BlogCategory[]
}

const BlogCategoryPage = ({
    category,
    posts,
    categories
}: PageProps) => {
    if (!category) return null;

    return (
        <>
            <NextSeo
                title={siteTitle(category.title, BLOG_TEMPLATE)}
                description={category.description}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/categories/${category.slug}`,
                    title: category.title,
                    description: category.description,
                }}
            />
            <Layout>
                <div className="pb-8 border-b-2 border-gray-100">
                    <PageTitle>
                        {category.title}
                    </PageTitle>

                    <PageDescription>
                        {category.description}
                    </PageDescription>

                    <div className="flex justify-between items-center mt-12 flex-col md:flex-row">
                        <CategoryList active={category.slug} categories={categories} />

                        <div className="mt-4 md:mt-0 w-full md:w-auto">
                            <SearchForm />
                        </div>
                    </div>
                </div>

                {posts.length > 0 ? (
                    <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                        {posts.map((post) => (
                            <PostCard
                                key={post._id}
                                title={post.title}
                                slug={post.slug}
                                thumbnail={post.thumbnail}
                                description={post.description}
                                date={post._createdAt}
                                categories={post.categories}
                            />
                        ))}
                    </div>
                ) : <NoData className="mt-8" />}
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {params = {}} = context;
    const slug = params.slug as string;
    const category = await getBlogCategoryBySlug(slug);

    if (!category) return { notFound: true }

    const posts = await getPostsByCategory(slug);
    const categories = await getBlogCategories();
    return {
        props: {
            category,
            posts,
            categories
        }
    }
}

export const getStaticPaths = async ({locales, defaultLocale}) => {
    const projectPaths = await getBlogCategoryPaths()
    const paths = getPaths('blogCategory', locales, defaultLocale, projectPaths);
    return {
        paths,
        fallback: 'blocking',
    }
}

export default BlogCategoryPage;
