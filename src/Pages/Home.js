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

// eslint-disable-next-line no-unused-vars
const RemovedLater = () => {
  const [val, setVal] = React.useState("");
  const handleChange = e => {
    const pass = e.target.value;
    setVal(pass);
  };
  return (
    <article style={{ border: "2px solid black", width: 150, margin: "auto" }}>
      <label htmlFor="pass" style={{ fontSize: 10 }}>
        password
      </label>
      <input
        type="text"
        id="pass"
        value={val}
        onChange={handleChange}
        style={{ width: 80 }}
      />
      {val === "0214" && (
        <>
          <h1 style={{ fontSize: 14, color: "red" }}>
            Start rough draft of new resume, using indeed examples, as well as
            the skills you have written on portfolio - shoul be consistent!
            polish portfolio, revise writing etc. and start with resume + VISA
            stuff, and think about including more links like github, edabit?
            maybe in footer. And continue reading through Google CSS stuff +
            Kent, and make decision about Epic React - pay or not. Maybe talk
            about appranked.com in more detailed job description. Clean up
            github.com
          </h1>
          <p style={{ fontSize: 14, color: "red" }}>clean up github account</p>
          <hr />
          <p style={{ fontSize: 14, color: "red" }}>
            VISA contact, Epic React or not?, Blog post + Dan's blog, Google CSS
          </p>

          <hr />
          <p style={{ fontSize: 14, color: "red" }}>get own .com domain</p>
          <p style={{ fontSize: 14, color: "red" }}>
            find way to publish your own module on npm?
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
    </article>
  );
};

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
