import React from 'react';
import {ChildrenProps} from "@/types/ChildrenProps";

const PageSubtitle = ({children}: ChildrenProps) => {
    return (
        <h2 className="font-extrabold text-slate-800 text-2xl md:text-3xl">
            {children}
        </h2>
    );
};

export default PageSubtitle;
