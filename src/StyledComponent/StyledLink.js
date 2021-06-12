import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  && {
    font-family: ${props => (props.normalFont ? "arial" : "Montserrat")};
    font-weight: bold;
    text-decoration: ${props => (props.underline ? "underline" : "0")};
    color: ${props => props.theme.color};
    padding: 0 10px;
    ${props =>
      props.nopadding &&
      css` 
      padding: 0;
      font-family: arial;
      color: ${props => props.theme.link.color};
      text-decoration: underline;
      `}
  }
`;

export default StyledLink;
