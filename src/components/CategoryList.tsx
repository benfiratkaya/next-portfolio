import React from 'react';
import CategoryLink from "@/components/CategoryLink";
import {BlogCategory} from "@/sanity/types";
import useTranslation from "next-translate/useTranslation";

type CategoryListProps = {
    categories: BlogCategory[];
    active?: string;
}

const CategoryList = ({categories, active = 'all'}: CategoryListProps) => {
    const {t} = useTranslation("blog");

    return (
        <div className="flex gap-2 w-full overflow-x-auto">
            <CategoryLink href="/blog" isActive={active === 'all'}>
                {t("all")}
            </CategoryLink>

            {categories.map((category: BlogCategory) => (
                <CategoryLink
                    key={category.slug}
                    href={`/blog/categories/${category.slug}`}
                    isActive={active === category.slug}
                >
                    {category.title}
                </CategoryLink>
            ))}
        </div>
    );
};

export default CategoryList;
