import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import {Project} from "@/sanity/types";
import {GetStaticProps} from "next";
import {getProjects} from "@/sanity/lib/client";
import useTranslation from "next-translate/useTranslation";
import {siteTitle} from "@/helpers/siteTitle";
import {NextSeo} from "next-seo";
import React from "react";
import PageTitle from "@/components/PageTitle";
import PageDescription from "@/components/PageDescription";
import NoData from "@/components/NotData";

type PageProps = {
    projects: Project[];
}

const ProjectsPage = ({
    projects
}: PageProps) => {
    const {t} = useTranslation("projects");
    return (
        <>
            <NextSeo
                title={siteTitle(t('seo:projects.title'))}
                description={t("seo:projects.description")}
            />
            <Layout>
                <div className="pb-8 border-b-2 border-gray-100">
                    <PageTitle>
                        {t("title")}
                    </PageTitle>

                    <PageDescription>
                        {t("description")}
                    </PageDescription>
                </div>

                {projects.length > 0 ? (
                    <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                        {projects.map((project: Project) => (
                            <ProjectCard
                                key={project.slug}
                                title={project.title}
                                description={project.description}
                                slug={project.slug}
                                thumbnail={project.thumbnail}
                                date={project._createdAt}
                                categories={project.categories}
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
            projects: await getProjects(),
        },
    };
}

export default ProjectsPage;
