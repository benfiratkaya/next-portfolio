import React from 'react';
import {ChildrenProps} from "@/types/ChildrenProps";

const ArticleTitle = ({children}: ChildrenProps) => {
    return (
        <h1 className="text-3xl md:text-4xl text-slate-900 font-extrabold mx-auto leading-tight">
            {children}
        </h1>
    );
};

export default ArticleTitle;
