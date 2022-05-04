import styled from "styled-components";
import CardWrapper from "./StyledPaper";

const Link = styled.a.attrs(() => ({ target: "_blank", rel: "noreferrer" }))`
  color: ${(props) => props.theme.link.color};
  text-decoration: none;
  font-weight: 900;

  :hover {
    text-decoration: underline;
  }

  ${CardWrapper} & {
    background: #364fc7;
    color: white;
    padding: 4px;
    font-size: 0.6rem;
    border-radius: 4px;
  }
`;

export default Link;
