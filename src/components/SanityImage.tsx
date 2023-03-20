import React from 'react';
import NextImage from "next/image";
import {createClient} from "@sanity/client";
import {dataset, projectId, useCdn, apiVersion} from "@/sanity/env";
import {useNextSanityImage} from "next-sanity-image";
import {Image} from "@/sanity/types";

const configuredSanityClient = createClient({
    projectId,
    dataset,
    useCdn,
    apiVersion
});

type SanityImageProps = {
    image: Image,
    alt: string
}

const SanityImage: React.FC<SanityImageProps & React.HTMLProps<HTMLImageElement>> = ({image, alt, ...props}: SanityImageProps) => {
    const imageProps = useNextSanityImage(
        configuredSanityClient,
        image
    );

    return (
        <NextImage
            {...imageProps}
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 800px) 100vw, 800px"
            placeholder="blur"
            blurDataURL={image.asset.metadata.lqip}
            alt={alt}
            {...props}
        />
    );
};

export default SanityImage;
