import React from "react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeContainer from "./styled/CodeContainer";

const Code = ({ children }) => {
  return (
    <CodeContainer
      language="javascript"
      style={nightOwl}
      wrapLongLines={true}
      showLineNumbers={true}
    >
      {children}
    </CodeContainer>
  );
};

export default Code;
