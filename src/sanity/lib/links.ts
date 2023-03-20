export function resolveHref(
    documentType?: string,
    slug?: string,
    locale?: string,
    defaultLocale?: string
): string | undefined {
    let link = undefined;
    if (slug) {
        switch (documentType) {
            case 'post':
                link = `/blog/${slug}`;
                break;
            case 'blogCategory':
                link = `/blog/categories/${slug}`;
                break;
            case 'project':
                link = `/projects/${slug}`;
                break;
            default:
                console.warn('Invalid document type:', documentType)
                return undefined
        }
    }
    if (locale && locale !== defaultLocale) link = `/${locale}${link}`;
    return link;
}

export function getPaths(
    type: string,
    locales: string[],
    defaultLocale: string,
    paths?: string[],
): string[] {
    let pathList = [];
    locales.map(
        (locale) => paths?.map((slug) => pathList.push(resolveHref(type, slug, locale, defaultLocale)))
    );

    return pathList;
}