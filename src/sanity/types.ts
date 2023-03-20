export interface Base {
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _createdAt: string;
}

export interface Home extends Base {
    title: string;
    description: Block[];
    mainImage: Image;
}

export interface About extends Base {
    title: string;
    body: Block[];
    profileImage: Image;
}

export interface Post extends Base {
    title: string;
    slug: string;
    description: string;
    body: Block[];
    categories: BlogCategory[];
    thumbnail: Image;
}

export interface BlogCategory extends Base {
    title: string;
    slug: string;
    description: string;
}

export interface Project extends Base {
    title: string;
    slug: string;
    description: string;
    link: string;
    body: Block[];
    categories: ProjectCategory[];
    thumbnail: Image;
}

export interface ProjectCategory extends Base {
    title: string;
    slug: string;
    description: string;
}

export interface Image {
    _type: "image";
    asset: Reference & {
        metadata: {
            lqip: string;
        }
    };
}

export interface Reference {
    _ref: string;
    _type: "reference";
}

export interface Slug {
    _type: "slug";
    current: string;
}

export interface Block {
    _key: string;
    _type: string;
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

export interface Span {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
}

export interface thumbnail {
    _type: "image";
    asset: Reference
}

export interface Title {
    _type: "string";
    current: string;
}