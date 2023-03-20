import React from 'react';
import {ChildrenProps} from "@/types/ChildrenProps";

const ArticleDescription = ({children}: ChildrenProps) => {
    return (
        <p className="md:text-lg text-gray-500 mt-4">
            {children}
        </p>
    );
};

export default ArticleDescription;
