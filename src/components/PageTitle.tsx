import React from 'react';
import {ChildrenProps} from "@/types/ChildrenProps";

const PageTitle = ({children}: ChildrenProps) => {
    return (
        <h1 className="font-extrabold text-slate-800 text-3xl md:text-4xl">
            {children}
        </h1>
    );
};

export default PageTitle;
