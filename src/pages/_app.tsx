import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";

import SEO from "@/../next-seo.config";

import '@/styles/globals.css'
import "@/styles/prism.css";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo {...SEO} />
    <GoogleAnalytics trackPageViews />
    <NextNProgress color="#3B81F6" />
    <Component {...pageProps} />
  </>
}
