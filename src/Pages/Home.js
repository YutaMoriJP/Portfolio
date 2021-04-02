import React from "react";
import Helmet from "react-helmet";
import StyledHome from "../StyledComponent/StyledHome";
import { Title as HomeTitle, More } from "../StyledComponent/StyledHome";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Project from "./Project";
import Text from "../Components/Animation/Text";
import { AttentionSeeker } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHome>
        <HomeTitle variant="h4">
          <Text>
            Hi, I am Yuta, a front end web developer from Japan, who grew up in
            Germany and currently living in Canada.
          </Text>
        </HomeTitle>
        <More>
          <h1>See Projects</h1>
          <a href="#project">
            <AttentionSeeker triggerOnce>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </AttentionSeeker>
          </a>
        </More>
      </StyledHome>
      <Project />
    </>
  );
};

export default Home;
