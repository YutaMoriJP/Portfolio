import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeContainer = styled(SyntaxHighlighter)`
  width: 80%;
  max-width: 1000px;
  min-width: 300px;
  font-size: 1rem;
  margin: auto;
  @media screen and (min-width: 200px) and (max-width: 500px) {
    font-size: 0.5rem;
    width: 100%;
  }
  @media screen and (min-width: 361px) and (max-width: 500px) {
    width: 100%;
    font-size: 0.6rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1000px) {
    font-size: 0.9rem;
    width: 100%;
  }
`;

export default CodeContainer;
