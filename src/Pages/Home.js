import React, { lazy } from "react";
import Helmet from "react-helmet";
import StyledHome from "../StyledComponent/StyledHome";
import { Title as HomeTitle, More } from "../StyledComponent/StyledHome";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Project from "./Project";
import Text, { NormalText } from "../Components/Animation/Text";
import { Zoom } from "react-awesome-reveal";

const Notice = lazy(() => import("../Components/Notice/Notice"));

const RemovedLater = () => {
  const [val, setVal] = React.useState("");
  const handleChange = e => {
    const pass = e.target.value;
    setVal(pass);
  };
  return (
    <>
      <label htmlFor="pass">password</label>
      <input type="text" id="pass" value={val} onChange={handleChange} />
      {val === "0214" && (
        <>
          <p>get own .com domain</p>
          <p>emphasize yourself being trilingual</p>
          <p>talk more about your work experience</p>
          <p>talk to bjorn to pass resume and get reference letter</p>
          <p>??? vanila JS project?</p>
          <p>
            add JS details that Kent mentioned like Promises, destructuring etc.
            and then link to Edabit?
          </p>
        </>
      )}
    </>
  );
};

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHome>
        <HomeTitle variant="h4">
          <RemovedLater />
          <Text variant="h5">
            Hi, I am Yuta, a front end web developer from Japan.
          </Text>
          <NormalText variant="h6" delay={200} color="pink">
            See my projects below, or learn more about me here.
          </NormalText>
        </HomeTitle>
        <More>
          <Zoom delay={300} triggerOnce>
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
      <Notice />
    </>
  );
};

export default Home;
