import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // process.env.NODE_ENV === 'production'
})