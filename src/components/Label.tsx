import React from "react";

type LabelProps = {
    id: string;
    children: React.ReactNode;
}

const Label = ({id, children}: LabelProps) => {
    return (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {children}
        </label>
    );
};

export default Label;
