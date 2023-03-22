import LayoutWithoutContainer from "@/components/LayoutWithoutContainer";
import ProjectCard from "@/components/ProjectCard";
import {LinkIcon} from "@heroicons/react/20/solid";
import {GetStaticProps} from "next";
import {getProjectBySlug, getProjectPaths, getRelatedProjects} from "@/sanity/lib/client";
import {getPaths} from "@/sanity/lib/links";
import {Project} from "@/sanity/types";
import useTranslation from "next-translate/useTranslation";
import SanityImage from "@/components/SanityImage";
import {NextSeo} from "next-seo";
import {urlForImage} from "@/sanity/lib/image";
import {BLOG_TEMPLATE, siteTitle} from "@/helpers/siteTitle";
import {useDate} from "@/hooks/useDate";
import PageSubtitle from "@/components/PageSubtitle";
import ArticleTitle from "@/components/ArticleTitle";
import ArticleDescription from "@/components/ArticleDescription";
import ArticleDate from "@/components/ArticleDate";
import Content from "@/components/Content";

type PageProps = {
    project?: Project
    relatedProjects: Project[]
}

const ProjectPage = ({project, relatedProjects}: PageProps) => {
    const {t} = useTranslation("projects");
    const [formattedDate] = useDate(project._createdAt);

    return (
        <>
            <NextSeo
                title={siteTitle(project.title, BLOG_TEMPLATE)}
                description={project.description}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`,
                    title: project.title,
                    description: project.description,
                    images: [
                        {
                            url: urlForImage(project.thumbnail).url(),
                            alt: project.title,
                        },
                    ],
                }}
            />
            <LayoutWithoutContainer>
                <div className="mx-auto max-w-4xl py-8 md:pt-16 md:pb-10 px-4 sm:px-0">
                    <div className="text-center">
                        <ArticleDate date={project._createdAt}>
                            {t("published", {
                                date: formattedDate
                            })}
                        </ArticleDate>

                        <ArticleTitle>
                            {project.title}
                        </ArticleTitle>

                        <ArticleDescription>
                            {project.description}
                        </ArticleDescription>
                    </div>
                </div>

                <div className="md:mx-auto md:max-w-6xl pb-8 md:pb-12">
                    <SanityImage image={project.thumbnail} alt={project.title} />
                </div>

                <div className="mx-auto max-w-4xl pb-10 md:pb-16 px-4 sm:px-0">
                    <Content>
                        {project.body}
                    </Content>

                    {project.link && (
                        <div className="mt-2">
                            <a href={project.link} target="_blank" className="inline-flex items-center font-semibold text-black hover-underline-animation">
                            <span>
                                {t("visit-project")}
                            </span>
                                <LinkIcon className="flex w-5 h-5 ml-1 text-blue-500" />
                            </a>
                        </div>
                    )}
                </div>

                <div className="mx-auto max-w-7xl pt-12 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6">
                    <PageSubtitle>
                        {t("recent-projects")}
                    </PageSubtitle>

                    <div className="mt-6 md:mt-8 grid gap-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                        {relatedProjects.map((project: Project) => (
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
                </div>
            </LayoutWithoutContainer>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {params = {}} = context;
    const slug = params.slug as string;
    const project = await getProjectBySlug(slug);

    if (!project) return { notFound: true }

    const relatedProjects = await getRelatedProjects(slug)
    return {
        props: {
            project,
            relatedProjects
        }
    }
}

export const getStaticPaths = async ({locales, defaultLocale}) => {
    const projectPaths = await getProjectPaths()
    const paths = getPaths('project', locales, defaultLocale, projectPaths);
    return {
        paths,
        fallback: 'blocking',
    }
}

export default ProjectPage;
