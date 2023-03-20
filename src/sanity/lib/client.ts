import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {Home, About, Post, BlogCategory, Project} from "@/sanity/types";
import {
    homePageQuery,
    aboutPageQuery,
    blogCategoriesQuery,
    blogCategoryBySlugQuery,
    blogCategoryPaths,
    postBySlugQuery,
    postPaths,
    postsByCategoryQuery,
    postsQuery,
    projectBySlugQuery,
    projectPaths,
    projectsQuery,
    relatedPostsQuery,
    relatedProjectsQuery,
    searchPostsQuery
} from "@/sanity/queries";

export const client = () => {
    return createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,
    })
}

export async function getHome(): Promise<Home | undefined> {
    return await client().fetch(homePageQuery);
}

export async function getAbout(): Promise<About | undefined> {
    return await client().fetch(aboutPageQuery);
}

export async function getPosts(): Promise<Post[] | undefined> {
    return await client().fetch(postsQuery);
}

export async function getPostBySlug(slug: string): Promise<Project | undefined> {
    return await client().fetch(postBySlugQuery, {slug});
}

export async function getPostsByCategory(slug: string): Promise<Post[] | undefined> {
    return await client().fetch(postsByCategoryQuery, {slug});
}

export async function getRelatedPosts(slug: string): Promise<Project[] | undefined> {
    return await client().fetch(relatedPostsQuery, {slug});
}

export async function searchPost(query: string): Promise<Post[] | undefined> {
    return await client().fetch(searchPostsQuery, {query});
}

export async function getBlogCategories(): Promise<BlogCategory[] | undefined> {
    return await client().fetch(blogCategoriesQuery);
}

export async function getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined> {
    return await client().fetch(blogCategoryBySlugQuery, {slug});
}

export async function getProjects(): Promise<Project[] | undefined> {
  return await client().fetch(projectsQuery);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return await client().fetch(projectBySlugQuery, {slug});
}

export async function getRelatedProjects(slug: string): Promise<Project[] | undefined> {
    return await client().fetch(relatedProjectsQuery, {slug});
}

export async function getPostPaths(): Promise<string[]> {
    return await client().fetch(postPaths)
}

export async function getBlogCategoryPaths(): Promise<string[]> {
    return await client().fetch(blogCategoryPaths)
}

export async function getProjectPaths(): Promise<string[]> {
  return await client().fetch(projectPaths)
}