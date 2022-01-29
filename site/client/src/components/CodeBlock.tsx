import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type CodeBlockProps = {
  readonly children: React.ReactNode;
};

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language="typescript" showLineNumbers wrapLongLines style={docco}>
      {props.children}
    </SyntaxHighlighter>
  );
};
