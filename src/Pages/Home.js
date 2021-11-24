import React from "react";
import Helmet from "react-helmet";
import StyledHome from "../StyledComponent/StyledHome";
import { Title as HomeTitle, More } from "../StyledComponent/StyledHome";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Project from "./Project";
import Text, { NormalText } from "../Components/Animation/Text";
import { Zoom } from "react-awesome-reveal";
import StyledLink from "../StyledComponent/StyledLink";

export const Home = () => {
  const handleHashClick = () => {
    if ("scrollIntoView" in document.getElementById("project")) {
      //console.log("scrollIntoView is supported!");
      document.getElementById("project").scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "project";
    }
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHome>
        <HomeTitle variant="h4">
          <Text variant="h5">
            Hi, I am Yuta, a FullStack Developer from Japan, located in Victoria
            BC.
          </Text>
          <NormalText variant="h6" delay={200} color="pink">
            See my{" "}
            <StyledLink nopadding={1} to="./project">
              projects
            </StyledLink>
            ,{" "}
            <StyledLink nopadding to="./skills">
              skills
            </StyledLink>
            , or learn more about me{" "}
            <StyledLink nopadding to="./about">
              here.
            </StyledLink>
          </NormalText>
        </HomeTitle>
        <More>
          <Zoom delay={300} triggerOnce>
            <h1>See Projects</h1>
          </Zoom>
          <Zoom effect="bounce" triggerOnce delay={200}>
            <IconButton
              aria-label="Move down to Project page"
              onClick={handleHashClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Zoom>
        </More>
      </StyledHome>
      <Project />
    </>
  );
};
export default Home;
