import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from '@/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export default defineConfig({
  name: 'default',
  title: 'next-portfolio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

