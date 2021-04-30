import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";

const TextGradient = styled(Typography)`
  font-weight: 900;
  background: ${props =>
    props.theme?.titleGradient?.background || props.theme.color};
  background: ${props =>
    props.theme?.titleGradient?.webkit || props.theme.color};
  background: ${props => props.theme?.titleGradient?.moz || props.theme.color};
  background: ${props =>
    props.theme?.titleGradient?.linear || props.theme.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${props =>
    props.normal &&
    css`
      color: pink;
    `}
`;

export const NonGradient = styled(Typography)`
  padding: 10px;
`;

/*
const TextGradient = styled.h1`
  background: #fff0f6;
  background: -webkit-linear-gradient(to right, #fff0f6 0%, #d6336c 100%);
  background: -moz-linear-gradient(to right, #fff0f6 0%, #d6336c 100%);
  background: linear-gradient(to right, #fff0f6 0%, #d6336c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

*/

export default TextGradient;
