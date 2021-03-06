import styled, { css } from "styled-components";

const StyledLink = styled.p`
  && {
    font-family: ${props => (props.normalFont ? "arial" : "Montserrat")};
    font-weight: bold;
    color: ${props => props.theme.color};
    padding: 0 10px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
    ${props =>
      props.nopadding &&
      css`
        margin: 0;
        padding: 0;
        font-family: arial;
        color: ${props => props.theme.link.color};
      `}
  }
`;

export default StyledLink;
