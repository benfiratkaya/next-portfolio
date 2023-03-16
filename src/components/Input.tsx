import React from "react";
import {classNames} from "@/helpers/classNames";

const Input = ({...props}: React.InputHTMLAttributes<any>) => {
    return (
        <input
            {...props}
            className={classNames(
                `py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md`,
                props.className
            )}
        />
    );
};

export default Input;
