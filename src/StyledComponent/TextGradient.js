import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const TextGradient = styled(Typography)`
  font-weight: 900;
  background: ${props => props.theme.titleGradient.background};
  background: ${props => props.theme.titleGradient.webkit};
  background: ${props => props.theme.titleGradient.moz};
  background: ${props => props.theme.titleGradient.linear};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
