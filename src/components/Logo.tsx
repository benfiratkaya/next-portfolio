import React from 'react';
import Image from "next/image";
import logo from "@/images/logo.png";

const Logo = () => {
    return (
        <>
            <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
            <Image
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt={process.env.NEXT_PUBLIC_SITE_NAME}
            />
        </>
    );
};

export default Logo;
