import React from 'react';
import useTranslation from "next-translate/useTranslation";
import {classNames} from "@/helpers/classNames";

type NoDataProps = {
    className?: string;
}

const NoData = ({className}: NoDataProps) => {
    const {t} = useTranslation("common");
    return (
        <div className={
            classNames("py-3 px-5 bg-red-100 text-red-500 rounded-lg", className)
        }>
            {t('no-data')}
        </div>
    );
};

export default NoData;
