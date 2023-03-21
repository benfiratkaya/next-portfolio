import React from 'react';
import Refractor from "react-refractor";
import php from 'refractor/lang/php'
import js from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import css from 'refractor/lang/css'
import go from 'refractor/lang/go'
import csharp from 'refractor/lang/csharp'
import c from 'refractor/lang/c'
import cpp from 'refractor/lang/cpp'
import scss from 'refractor/lang/scss'
import sass from 'refractor/lang/sass'
import sql from 'refractor/lang/sql'
import java from 'refractor/lang/java'
import json from 'refractor/lang/json'
import jsx from 'refractor/lang/jsx'
import tsx from 'refractor/lang/tsx'
import bash from 'refractor/lang/bash'
import python from 'refractor/lang/python'
import ruby from 'refractor/lang/ruby'
import yaml from 'refractor/lang/yaml'
import graphql from 'refractor/lang/graphql'
import git from 'refractor/lang/git'
import aspnet from 'refractor/lang/aspnet'
import django from 'refractor/lang/django'
import matlab from 'refractor/lang/matlab'
import markdown from 'refractor/lang/markdown'
import mongodb from 'refractor/lang/mongodb'
import swift from 'refractor/lang/swift'

type CodeBlockProps = {
    value: {
        code: string;
        language: string;
    }
}

Refractor.registerLanguage(php)
Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(go)
Refractor.registerLanguage(csharp)
Refractor.registerLanguage(c)
Refractor.registerLanguage(cpp)
Refractor.registerLanguage(css)
Refractor.registerLanguage(scss)
Refractor.registerLanguage(sass)
Refractor.registerLanguage(sql)
Refractor.registerLanguage(java)
Refractor.registerLanguage(json)
Refractor.registerLanguage(jsx)
Refractor.registerLanguage(tsx)
Refractor.registerLanguage(bash)
Refractor.registerLanguage(python)
Refractor.registerLanguage(ruby)
Refractor.registerLanguage(yaml)
Refractor.registerLanguage(graphql)
Refractor.registerLanguage(git)
Refractor.registerLanguage(matlab)
Refractor.registerLanguage(aspnet)
Refractor.registerLanguage(django)
Refractor.registerLanguage(markdown)
Refractor.registerLanguage(mongodb)
Refractor.registerLanguage(swift)

const CodeBlock = ({value: {language, code}}: CodeBlockProps) => {
    return (
        <Refractor
            language={language}
            value={code}
        />
    );
};

export default CodeBlock;
