import React from "react";
import {classNames} from "@/helpers/classNames";

type ButtonProps = {
    isLoading?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
    isLoading,
    children,
    ...props
} : ButtonProps) => {
    return (
        <button
            {...props}
            disabled={isLoading}
            className={classNames(
                `w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`,
                isLoading && `opacity-50 cursor-not-allowed hover:bg-blue-500`
            )}
        >
            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : children}
        </button>
    );
};

export default Button;
