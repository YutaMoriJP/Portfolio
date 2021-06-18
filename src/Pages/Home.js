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
          <h1 style={{ fontSize: 30, color: "red" }}>
            polish portfolio, revise writing etc. and start with resume + VISA
            stuff
          </h1>
          <hr />
          <p style={{ fontSize: 14, color: "red" }}>
            VISA contact, Epic React or not?, Blog post + Dan's blog, Google CSS
          </p>
          <p style={{ fontSize: 14, color: "red" }}>
            revise skills, about, project descrp etc.{" "}
          </p>
          <hr />
          <p style={{ fontSize: 14, color: "red" }}>get own .com domain</p>
          <p style={{ fontSize: 14, color: "red" }}>
            find way to publish your own module on npm?
          </p>
          <p style={{ fontSize: 14, color: "red" }}>
            get old resume and use the indeed templte and get reference letters,
            there is a folder
          </p>
          <p style={{ fontSize: 14, color: "red" }}>contact jp visa place</p>
          <p style={{ fontSize: 14, color: "red" }}>
            emphasize yourself being trilingual
          </p>
          <p style={{ fontSize: 14, color: "red" }}>
            talk more about your work experience - keyword research
          </p>
          <p style={{ fontSize: 14, color: "red" }}>
            talk to bjorn to pass resume and get reference letter
          </p>
          <p style={{ fontSize: 14, color: "red" }}>??? vanila JS project?</p>
          <p style={{ fontSize: 14, color: "red" }}>
            add JS details that Kent mentioned like Promises,regex,
            destructuring etc. and then link to Edabit? Show Condesandbox with
            the TEST
          </p>
          <p style={{ fontSize: 14, color: "red" }}>PROOFREAD!</p>
        </>
      )}
    </>
  );
};

export const Home = () => {
  const handleHashClick = () => {
    if ("scrollIntoView" in document.getElementById("project")) {
      console.log("scrollIntoView is supported!");
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
          <RemovedLater />
          <Text variant="h5">
            Hi, I am Yuta, a front end web developer from Japan.
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
