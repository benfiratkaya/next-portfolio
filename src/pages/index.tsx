import {NextSeo} from "next-seo";
import useTranslation from "next-translate/useTranslation";
import {GetStaticProps} from "next";
import Layout from "@/components/Layout";
import Content from "@/components/Content";
import {Home} from "@/sanity/types";
import {getHome} from "@/sanity/lib/client";
import {siteTitle} from "@/helpers/siteTitle";
import ProfileImageCard from "@/components/ProfileImageCard";
import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

type PageProps = {
    content: Home
}

export default function HomePage({content}: PageProps) {
    const {t} = useTranslation("home");
    if (content === null) return "Edit this page in Sanity Studio!"

    return (
        <>
            <NextSeo
                title={siteTitle(t('seo:home.title'))}
                description={t("seo:home.description")}
            />
            <Layout>
                <div className="flex justify-between items-center">
                    <div className="py-8 md:py-0 md:max-w-xl">
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                            {content.title}
                        </h1>
                        <Content className="mt-6 prose-xl text-gray-500">
                            {content.description}
                        </Content>
                        <div className="flex gap-2 mt-6">
                            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-blue-500 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">
                                {t('contact')}
                            </Link>
                            <Link href="/about" className="inline-flex gap-2 text-gray-700 items-center justify-center px-4 py-2 text-base font-medium">
                                <span>
                                    {t('learn-more')}
                                </span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block md:max-w-md">
                        <ProfileImageCard image={content.mainImage} alt={content.title} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            content: await getHome(),
        }
    }
}
