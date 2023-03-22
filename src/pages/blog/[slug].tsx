import PostCard from "@/components/PostCard";
import DisqusComments from "@/components/DisqusComments";
import {GetStaticProps} from "next";
import {
    getPostBySlug,
    getPostPaths,
    getRelatedPosts
} from "@/sanity/lib/client";
import {getPaths} from "@/sanity/lib/links";
import {Post} from "@/sanity/types";
import SanityImage from "@/components/SanityImage";
import useTranslation from "next-translate/useTranslation";
import {BLOG_TEMPLATE, siteTitle} from "@/helpers/siteTitle";
import {urlForImage} from "@/sanity/lib/image";
import {NextSeo} from "next-seo";
import {useDate} from "@/hooks/useDate";
import LayoutWithoutContainer from "@/components/LayoutWithoutContainer";
import ArticleTitle from "@/components/ArticleTitle";
import ArticleDescription from "@/components/ArticleDescription";
import PageSubtitle from "@/components/PageSubtitle";
import ArticleDate from "@/components/ArticleDate";
import Content from "@/components/Content";
import NoData from "@/components/NotData";

type PageProps = {
    post?: Post
    relatedPosts: Post[]
}

const BlogPostPage = ({post, relatedPosts}: PageProps) => {
    const {t} = useTranslation("blog");
    const [formattedDate] = useDate(post._createdAt);

    return (
        <>
            <NextSeo
                title={siteTitle(post.title, BLOG_TEMPLATE)}
                description={post.description}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
                    title: post.title,
                    description: post.description,
                    images: [
                        {
                            url: urlForImage(post.thumbnail).url(),
                            alt: post.title,
                        },
                    ],
                }}
            />
            <LayoutWithoutContainer>
                <div className="mx-auto max-w-4xl py-8 md:pt-16 md:pb-10 px-4 sm:px-0">
                    <ArticleDate date={post._createdAt}>
                        {t("published", {
                            date: formattedDate
                        })}
                    </ArticleDate>

                    <ArticleTitle>
                        {post.title}
                    </ArticleTitle>

                    <ArticleDescription>
                        {post.description}
                    </ArticleDescription>
                </div>

                <div className="md:mx-auto md:max-w-4xl pb-8 md:pb-12">
                    <SanityImage image={post.thumbnail} alt={post.title} />
                </div>

                <div className="mx-auto max-w-4xl pb-10 md:pb-16 px-4 sm:px-0">
                    <Content>
                        {post.body}
                    </Content>
                </div>

                <div className="mx-auto max-w-7xl pt-12 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
                    <PageSubtitle>
                        {t("related-posts")}
                    </PageSubtitle>

                    {relatedPosts.length > 0 ? (
                        <div className="mt-6 md:mt-8 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                            {relatedPosts.map((post) => (
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
                    ): <NoData className="mt-8" />}
                </div>

                <div className="mx-auto max-w-7xl pb-12 md:pb-20 pt-16 px-4 sm:px-6 border-t-2 border-gray-100">
                    <DisqusComments id={post.slug} title={post.title} />
                </div>
            </LayoutWithoutContainer>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {params = {}} = context;
    const slug = params.slug as string;
    const post = await getPostBySlug(slug);
    if (!post) return { notFound: true }

    const relatedPosts = await getRelatedPosts(slug);
    return {
        props: {
            post,
            relatedPosts
        }
    }
}

export const getStaticPaths = async ({locales, defaultLocale}) => {
    const projectPaths = await getPostPaths()
    const paths = getPaths('post', locales, defaultLocale, projectPaths);
    return {
        paths,
        fallback: 'blocking',
    }
}

export default BlogPostPage;
