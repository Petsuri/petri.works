import React from "react";

type CodeBlockProps = {
  readonly children: React.ReactNode;
};

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <pre>
      <code>{props.children}</code>
    </pre>
  );
};
