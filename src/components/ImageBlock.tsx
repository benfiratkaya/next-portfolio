import React from 'react';
import {Image} from "@/sanity/types";
import SanityImage from "@/components/SanityImage";

type ImageBlockProps = {
    value: {
        asset: Image;
    }
}
const ImageBlock = ({value: {asset}}: ImageBlockProps) => {
    return (
        <SanityImage
            image={asset}
            alt=""
        />
    );
};

export default ImageBlock;