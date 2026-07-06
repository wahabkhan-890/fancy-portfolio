"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlock = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => (
  <SyntaxHighlighter
    language={language}
    style={atomDark}
    customStyle={{
      margin: 0,
      padding: "1rem",
      background: "transparent",
      fontSize: "0.875rem",
      height: "415px",
    }}
    showLineNumbers={true}
    PreTag="div"
  >
    {code}
  </SyntaxHighlighter>
);