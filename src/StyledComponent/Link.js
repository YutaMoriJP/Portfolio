import styled from "styled-components";
import { LinksWrapper } from "../Components/Layout/Footer/FooterStyled";

const Link = styled.a`
  color: ${props => props.theme.link.color};
  text-decoration: underline;
  font-weight: 900;

  ${LinksWrapper} & {
  }
`;

export default Link;
