import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const PaperStyled = styled(Paper)`
  position: relative;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.buttonLink};
  }
`;

export default PaperStyled;
