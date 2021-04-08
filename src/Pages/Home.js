import React from "react";
import Helmet from "react-helmet";
import StyledHome from "../StyledComponent/StyledHome";
import { Title as HomeTitle, More } from "../StyledComponent/StyledHome";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Project from "./Project";
import Text from "../Components/Animation/Text";
import { Zoom } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHome>
        <HomeTitle variant="h4">
          <Text variant="h4">
            Hi, I am Yuta, a front end web developer from Japan. I grew up in
            Germany and currently live in Canada.
          </Text>
        </HomeTitle>
        <More>
          <Zoom delay={100} triggerOnce>
            <h1>See Projects</h1>
          </Zoom>
          <a href="#project" aria-label="Move down to Project page">
            <Zoom effect="bounce" triggerOnce delay={200}>
              <IconButton aria-label="Move down to Project page">
                <ExpandMoreIcon />
              </IconButton>
            </Zoom>
          </a>
        </More>
      </StyledHome>
      <Project />
    </>
  );
};

export default Home;
