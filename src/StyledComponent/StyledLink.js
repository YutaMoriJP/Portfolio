import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { LinksWrapper } from "../Components/Layout/Footer/FooterStyled";
import { Wrapper as ContactWrapper } from "../Pages/Contact";

const StyledLink = styled(Link)`
  && {
    font-family: ${props => (props.normalFont ? "arial" : "Montserrat")};
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.color};
    padding: 0 10px;
    :hover {
      text-decoration: underline;
    }

    ${props =>
      props.nopadding &&
      css`
        padding: 0;
        font-family: arial;
        color: ${props => props.theme.link.color};
      `}

    ${LinksWrapper} & {
      font-family: "arial";
      padding: 0;
      color: ${props => props.theme.link.color};
      :hover {
        text-decoration: underline;
      }
    }
    ${ContactWrapper} & {
      color: ${props => props.theme.link.color};
      font-family: arial;
    }
  }
`;

export default StyledLink;
