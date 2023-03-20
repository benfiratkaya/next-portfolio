import React from 'react';
import Refractor from "react-refractor";
import php from 'refractor/lang/php'

type CodeBlockProps = {
    value: {
        code: string;
        language: string;
    }
}

Refractor.registerLanguage(php)
const CodeBlock = ({value: {language, code}}: CodeBlockProps) => {
    return (
        <Refractor
            language={language}
            value={code}
        />
    );
};

export default CodeBlock;
