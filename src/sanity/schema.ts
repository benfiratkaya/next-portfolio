import { SchemaTypeDefinition } from 'sanity'

import blockContent from '@/sanity/schemas/blockContent'
import blogCategory from '@/sanity/schemas/blogCategory'
import post from '@/sanity/schemas/post'
import project from "@/sanity/schemas/project";
import projectCategory from "@/sanity/schemas/projectCategory";
import about from "@/sanity/schemas/singletons/about";
import home from "@/sanity/schemas/singletons/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blogCategory,
    project,
    projectCategory,
    blockContent,
    about,
    home,
  ],
}

export const singletons = [
    home,
    about
];