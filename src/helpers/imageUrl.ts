import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from "@/lib/sanity.client";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(sanityClient)

export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}