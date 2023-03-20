export const BLOG_TEMPLATE = '%title% %separator% %siteName%';

export function siteTitle(
    title: string,
    template: string = '%siteName% %separator% %title%',
    separator: string = '-',
    siteName: string = process.env.NEXT_PUBLIC_SITE_NAME
) {
  return template
      .replace('%siteName%', siteName)
      .replace('%separator%', separator)
      .replace('%title%', title);
}