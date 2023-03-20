import React from 'react';
import SanityImage from "@/components/SanityImage";
import {Image} from "@/sanity/types";

type ProfileImageCard = {
    image: Image
    alt: string
}

const ProfileImageCard = ({image, alt}: ProfileImageCard) => {
    return (
        <div className="max-w-xs px-2.5 lg:max-w-none">
            <SanityImage
                image={image}
                alt={alt}
                className="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover"
            />
        </div>
    );
};

export default ProfileImageCard;
