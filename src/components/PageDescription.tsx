import React from 'react';
import {ChildrenProps} from "@/types/ChildrenProps";

const PageDescription = ({children}: ChildrenProps) => {
    return (
        <p className="text-gray-500 mt-2">
            {children}
        </p>
    );
};

export default PageDescription;
