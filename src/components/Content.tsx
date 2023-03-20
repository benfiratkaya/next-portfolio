import React from 'react';
import {PortableText} from "@portabletext/react";
import {TypedObject} from "@portabletext/types";
import {classNames} from "@/helpers/classNames";
import CodeBlock from "@/components/CodeBlock";

type ContentProps = {
    children: TypedObject | TypedObject[];
    className?: string;
}

const components = {
    types: {
        code: CodeBlock,
    }
}

const Content = ({children, className}: ContentProps) => {
    return (
        <div className={
            classNames("prose prose-slate prose-a:font-bold max-w-none", className)
        }>
            <PortableText value={children} components={components} />
        </div>
    );
};

export default Content;
