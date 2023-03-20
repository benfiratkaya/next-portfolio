import {groq} from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    title,
    description,
    mainImage {
        asset-> {
            ...,
            metadata
        }
    },
  }
`

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    title,
    body,
    profileImage {
        asset-> {
            ...,
            metadata
        }
    },
  }
`

export const postsQuery = groq`
    *[_type == "post"]{
        ...,
        "slug": slug.current,
        thumbnail {
            asset-> {
                ...,
                metadata
            }
        },
        categories[]-> {
            title,
            "slug": slug.current,
        }
    } | order(_createdAt desc)
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug] {
    ...,
    "slug": slug.current,
    thumbnail {
        asset-> {
            ...,
            metadata
        }
    },
    categories[]-> {
        title,
        "slug": slug.current,
    }
  } | order(_createdAt desc)[0..2]
`

export const blogCategoriesQuery = groq`
    *[_type == "blogCategory"]{
        ...,
        "slug": slug.current,
    }
`;

export const blogCategoryBySlugQuery = groq`
  *[_type == "blogCategory" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
  }
`

export const projectsQuery = groq`
    *[_type == "project"]{
        ...,
        "slug": slug.current,
        thumbnail {
            asset-> {
                ...,
                metadata
            }
        },
        categories[]-> {
            title,
            "slug": slug.current,
        }
    } | order(_createdAt desc)
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    thumbnail {
        asset-> {
            ...,
            metadata
        }
    },
    categories[]-> {
        title,
        "slug": slug.current,
    }
  }
`

export const relatedProjectsQuery = groq`
  *[_type == "project" && slug.current != $slug] {
    ...,
    "slug": slug.current,
    thumbnail {
        asset-> {
            ...,
            metadata
        }
    },
    categories[]-> {
        title,
        "slug": slug.current,
    }
  } | order(_createdAt desc)[0..2]
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    thumbnail {
        asset-> {
            ...,
            metadata
        }
    },
  }
`

export const postsByCategoryQuery = groq`
    *[_type == "post" && $slug in categories[]->slug.current]{
        ...,
        "slug": slug.current,
        thumbnail {
            asset-> {
                ...,
                metadata
            }
        },
        categories[]-> {
            title,
            "slug": slug.current,
        }
    } | order(_createdAt desc)
`

export const searchPostsQuery = groq`
    *[_type == "post" && title match $query]{
        ...,
        "slug": slug.current,
        thumbnail {
            asset-> {
                ...,
                metadata
            }
        },
        categories[]-> {
            title,
            "slug": slug.current,
        }
    } | order(_createdAt desc)
`

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`

export const blogCategoryPaths = groq`
  *[_type == "blogCategory" && slug.current != null].slug.current
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`