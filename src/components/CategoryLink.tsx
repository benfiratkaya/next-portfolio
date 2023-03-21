import React from 'react';
import Link from "next/link";
import {classNames} from "@/helpers/classNames";

type CategoryLinkProps = {
    href?: string;
    isActive?: boolean;
    children: React.ReactNode;
}

const CategoryLink = ({children, href, isActive = false}: CategoryLinkProps) => {
    return (
        <Link
            href={href}
            className={classNames(
                "bg-white hover:bg-gray-100 border border-gray-300 transition font-medium rounded-md shadow-sm px-3 py-2 text-sm whitespace-nowrap",
                isActive && "!bg-blue-100 !text-blue-500 !border-blue-500"
            )}
        >
            {children}
        </Link>
    );
};

export default CategoryLink;
