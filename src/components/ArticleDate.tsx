import React from 'react';

type ArticleDateProps = {
    date: string
    children: React.ReactNode
}

const ArticleDate = ({date, children}: ArticleDateProps) => {
    return (
        <time dateTime={date} className="text-sm md:text-base text-gray-500 font-medium mb-12">
            {children}
        </time>
    );
};

export default ArticleDate;
