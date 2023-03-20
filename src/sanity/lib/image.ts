import createImageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
