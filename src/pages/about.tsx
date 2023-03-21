import React from "react";
import {NextSeo} from "next-seo";
import {GetStaticProps} from "next";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Layout";
import {getAbout} from "@/sanity/lib/client";
import {About} from "@/sanity/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {siteTitle} from "@/helpers/siteTitle";
import Content from "@/components/Content";
import ProfileImageCard from "@/components/ProfileImageCard";

type PageProps = {
  content: About
}

const AboutPage = ({content}: PageProps) => {
  const {t} = useTranslation("about");
  if (content === null) return "Edit this page in Sanity Studio!"

  return (
      <>
        <NextSeo
            title={siteTitle(t('seo:about.title'))}
            description={t("seo:about.description")}
        />
        <Layout>
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <ProfileImageCard image={content.profileImage} alt={content.title} />
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      {content.title}
                    </h1>
                    <div className="mt-6 space-y-7">
                      <Content className="text-gray-500">
                        {content.body}
                      </Content>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">
                      {process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK && (
                          <li className="mb-4 flex">
                            <a href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 flex-none text-blue-500 transition" />
                              <span className="ml-4">
                                {t("follow", {
                                  name: "Facebook",
                                })}
                              </span>
                            </a>
                          </li>
                      )}
                      {process.env.NEXT_PUBLIC_SOCIAL_TWITTER && (
                          <li className="mb-4 flex">
                            <a href={process.env.NEXT_PUBLIC_SOCIAL_TWITTER} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 flex-none text-sky-500 transition" />
                              <span className="ml-4">
                                {t("follow", {
                                  name: "Twitter",
                                })}
                              </span>
                            </a>
                          </li>
                      )}
                      {process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM && (
                          <li className="mb-4 flex">
                            <a href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 flex-none text-pink-500 transition" />
                              <span className="ml-4">
                                {t("follow", {
                                  name: "Instagram",
                                })}
                              </span>
                            </a>
                          </li>
                      )}
                      {process.env.NEXT_PUBLIC_SOCIAL_GITHUB && (
                          <li className="mb-4 flex">
                            <a href={process.env.NEXT_PUBLIC_SOCIAL_GITHUB} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faGithub} className="h-5 w-5 flex-none text-gray-900 transition" />
                              <span className="ml-4">
                                {t("follow", {
                                  name: "GitHub",
                                })}
                              </span>
                            </a>
                          </li>
                      )}
                      {process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN && (
                          <li className="mb-4 flex">
                            <a href={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 flex-none text-blue-700 transition" />
                              <span className="ml-4">
                                {t("follow", {
                                  name: "LinkedIn",
                                })}
                              </span>
                            </a>
                          </li>
                      )}
                      {process.env.NEXT_PUBLIC_SOCIAL_EMAIL && (
                          <li className="mt-8 border-t border-gray-200 pt-8 flex">
                            <a href={`mailto:${process.env.NEXT_PUBLIC_SOCIAL_EMAIL}`} className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500">
                              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 flex-none text-blue-500 transition" />
                              <span className="ml-4">
                                {process.env.NEXT_PUBLIC_SOCIAL_EMAIL}
                              </span>
                            </a>
                          </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: await getAbout(),
    }
  }
}

export default AboutPage;
