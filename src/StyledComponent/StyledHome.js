import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledHome = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "a a a" "a a a" "a a a " "a a a " "a a a " "c c c";
  @media screen and (min-width: 200px) and (max-width: 420px) {
    grid-template-areas: "a a a" "c c c";
  }
  @media screen and (min-width: 421px) and (max-width: 575px) {
    height: 100vh;
    grid-template-areas: "a a a" "a a a" "a a a" "c c c";
  }
`;

export const Title = styled(Typography)`
  grid-area: a;
  align-self: center;
  font-weight: 900;
  max-width: 800px;
  margin: auto;
`;

export const More = styled.article`
  h1 {
    padding: 0;
    margin: 0;
  }
  grid-area: c;
`;

export const Project = styled.article`
  height: 100vh;
  @media screen and (min-width: 400px) and (max-width: 960px) {
    margin: 30px;
  }
`;

export default StyledHome;
