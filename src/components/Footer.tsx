import React from "react";
import useTranslation from "next-translate/useTranslation";

import LanguageMenu from "@/components/LanguageMenu";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const {t} = useTranslation("common")
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-8 border-t-2 border-gray-100">
          <div className="flex flex-col md:flex-row md:order-2 items-center">
            <div className="w-full mt-6 md:mt-0 order-2 md:order-1 pr-0 md:pr-6">
              <LanguageMenu />
            </div>
            <div className="flex justify-center items-center space-x-6 order-1 md:order-2">
              <SocialLinks />
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              {t("footer.copyright", {
                year: new Date().getFullYear(),
                site: process.env.NEXT_PUBLIC_SITE_NAME
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}