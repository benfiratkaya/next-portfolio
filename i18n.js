module.exports = {
  locales: ["en", "tr"],
  defaultLocale: "en",
  defaultNS: "common",
  pages: {
    "*": ["common", "seo"],
    "/": ["home"],
    "/blog": ["blog"],
    "/blog/search": ["blog"],
    "/blog/[slug]": ["blog"],
    "/blog/categories/[slug]": ["blog"],
    "/projects": ["projects"],
    "/projects/[slug]": ["projects"],
    "/about": ["about"],
    "/contact": ["contact"],
  },
  "loadLocaleFrom": (lang, ns) =>
      // You can use a dynamic import, fetch, whatever. You should
      // return a Promise with the JSON file.
      import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
