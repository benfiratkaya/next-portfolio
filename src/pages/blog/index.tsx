import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import {GetStaticProps} from "next";
import {getBlogCategories, getPosts} from "@/sanity/lib/client";
import {Post, BlogCategory} from "@/sanity/types";
import useTranslation from "next-translate/useTranslation";
import {siteTitle} from "@/helpers/siteTitle";
import {NextSeo} from "next-seo";
import React from "react";
import SearchForm from "@/components/SearchForm";
import PageTitle from "@/components/PageTitle";
import PageDescription from "@/components/PageDescription";
import CategoryList from "@/components/CategoryList";
import NoData from "@/components/NotData";

type PageProps = {
    posts: Post[];
    categories: BlogCategory[];
}

const BlogPage = ({posts, categories}: PageProps) => {
    const {t} = useTranslation("blog");
    return (
        <>
            <NextSeo
                title={siteTitle(t('seo:blog.title'))}
                description={t("seo:blog.description")}
            />
            <Layout>
                <div className="pb-8 border-b-2 border-gray-100">
                    <PageTitle>
                        {t("title")}
                    </PageTitle>

                    <PageDescription>
                        {t("description")}
                    </PageDescription>

                    <div className="flex justify-between items-center mt-12 flex-col md:flex-row">
                        <CategoryList categories={categories} />

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

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            posts: await getPosts(),
            categories: await getBlogCategories(),
        },
    };
}

export default BlogPage;
