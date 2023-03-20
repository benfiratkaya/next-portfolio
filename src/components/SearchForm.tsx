import React from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import useTranslation from "next-translate/useTranslation";

type SearchInputProps = {
    query?: string;
}

const SearchForm = ({query}: SearchInputProps) => {
    const {t} = useTranslation("common");
    const [value, setValue] = React.useState<string>(query || "");

    return (
        <form action="/blog/search" method="get">
            <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="search"
                    name="query"
                    id="search"
                    className="blogSearch"
                    placeholder={t("search")}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchForm;
