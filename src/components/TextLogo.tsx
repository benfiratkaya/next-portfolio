import React from 'react';

const TextLogo = ({children}) => {
    return (
        <div className="font-bold text-lg text-gray-900 hover:text-blue-500 transition leading-none">
            {children}
        </div>
    );
};

export default TextLogo;
