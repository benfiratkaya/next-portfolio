import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";
import {siteTitle} from "@/helpers/siteTitle";
import React from "react";
import PageTitle from "@/components/PageTitle";
import PageDescription from "@/components/PageDescription";
import PageParticles from "@/components/PageParticles";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
    const {t} = useTranslation("contact")
  return (
      <>
        <NextSeo
            title={siteTitle(t('seo:contact.title'))}
            description={t("seo:contact.description")}
        />
        <Layout>
          <div className="bg-white px-4 overflow-hidden sm:px-6 lg:px-8">
            <div className="relative max-w-xl mx-auto">
              <PageParticles />

              <div className="text-center">
                <PageTitle>
                  {t("title")}
                </PageTitle>

                <PageDescription>
                  {t("description")}
                </PageDescription>

                <div className="flex w-full justify-center pt-4 gap-x-4 mt-3">
                  <SocialLinks />
                </div>
              </div>
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </Layout>
      </>
  )
}
