import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  && {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.color};
    padding: 0 10px;
    ${props =>
      props.nopadding &&
      css`
        padding: 0;
      `}
  }
`;

export default StyledLink;
