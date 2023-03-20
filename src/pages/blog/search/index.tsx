import React from "react";
import {NextSeo} from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import {siteTitle} from "@/helpers/siteTitle";
import {searchPost} from "@/sanity/lib/client";
import {Post} from "@/sanity/types";
import SearchForm from "@/components/SearchForm";
import PageTitle from "@/components/PageTitle";
import NoData from "@/components/NotData";

type PageProps = {
    posts: Post[];
    query: string;
}

const BlogSearchPage = ({posts, query}: PageProps) => {
    const {t} = useTranslation("blog");

    return (
        <>
            <NextSeo
                title={siteTitle(t('seo:blog.title'))}
                description={t("seo:blog.description")}
            />
            <Layout>
                <div className="pb-8 border-b-2 border-gray-100">
                    <div className="flex justify-between items-center flex-col md:flex-row">
                        <PageTitle>
                            {t("search-title", {
                                query,
                            })}
                        </PageTitle>
                        <div className="mt-4 md:mt-0 w-full md:w-auto">
                            <SearchForm query={query} />
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
                ) : <NoData className="mt-8" /> }
            </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    const query = context.query.query || "";
    return {
        props: {
            posts: await searchPost(query),
            query
        }
    }
}

export default BlogSearchPage;
