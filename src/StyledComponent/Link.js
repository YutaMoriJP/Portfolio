import styled from "styled-components";
import { LinksWrapper } from "../Components/Layout/Footer/FooterStyled";
import CardWrapper from "./StyledPaper";

const Link = styled.a`
  color: ${props => props.theme.link.color};
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
  ${LinksWrapper} & {
  }
`;

export default Link;
