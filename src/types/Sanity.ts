export interface Base {
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _createdAt: string;
}

export interface Post extends Base {
    title: string;
    slug: Slug;
    description: string;
    body: Block[];
    categories: PostCategory[];
    mainImage: Image;
}

export interface Work extends Base {
    title: string;
    slug: Slug;
    description: string;
    body: Block[];
    categories: PostCategory[];
    mainImage: Image;
}

export interface PostCategory extends Base {
    title: string;
    description: string;
}

export interface Image {
    _type: "image";
    asset: Reference;
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

export interface MainImage {
    _type: "image";
    asset: Reference
}

export interface Title {
    _type: "string";
    current: string;
}