import styled, { css } from "styled-components";

export default styled.p`
  color: ${props => props.theme.color};
  text-align: left;
  line-height: 30px;
  ${props =>
    props.indent &&
    css`
      text-indent: 6%;
    `}
`;
