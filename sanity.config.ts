/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {codeInput} from '@sanity/code-input'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {apiVersion, dataset, projectId, title} from '@/sanity/env'
import {schema, singletons} from '@/sanity/schema'
import {pageStructure, singletonPlugin} from "@/sanity/plugins/settings";
import {components} from "@/sanity/components";

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema,
  studio: {
    components
  },
  plugins: [
    codeInput(),
    deskTool({
      structure: pageStructure(singletons),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin(singletons),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})