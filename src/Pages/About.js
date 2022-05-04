import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Link from "../StyledComponent/Link";
import StyledLink from "../StyledComponent/StyledLink";
import TextLink from "../StyledComponent/Link";

import Helmet from "react-helmet";
import Text from "../StyledComponent/Text";

const containerCSS = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" };

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container maxWidth="md" style={containerCSS}>
        <Paper style={{ padding: 15, margin: "15px 5px" }}>
          <h1>ABOUT PAGE</h1>
          <Divider />
          <Text indent={1}>
            Thank you for visiting my portfolio. I am Yuta, a FullStack Developer at Brivity/Place, building automation
            tools. I was born in Japan and grew up in Germany. I am fluent in Japanese, German, and English. When I was
            15, I moved to Canada to learn English and a new culture. I have now been 11 years in Canada, completing my
            high school diploma and university degree. I have earned a major in Philosophy and a minor in Business from
            the University of Victoria.
          </Text>

          <Text indent={1}>
            After my graduation, I have worked a year as a Performance Marketing Specialist and internal Web Developer
            at Global Wide Media. Before working as a performance marketer, I ran my own website business for 4-years,
            and generated more than $3000 in profit, and developed the website to one of the top 90,000th most visited
            websites worldwide, according to Alexa.com. As a performance marketer, I specialized in search ads like
            Google Ads and Bing ads for clients like Dropbox, TikTok, Roblox, and more. Also, I have experience in other
            types of channels like display, push, contextual, native, and pop ads. As a performance marketer, I had many
            opportunities to build landing pages for my clients, promoting their products.
          </Text>

          <Text indent={1}>
            This portfolio aims to display my skills in web development, using JavaScript/TypeScript, CSS, and React. I
            have built diverse projects ranging from fullstack applications like a{" "}
            <Link href="https://next-forum.netlify.app/" target="_blank" rel="noreferrer">
              Forum Website
            </Link>{" "}
            to a{" "}
            <Link href="https://user-profile-crud-api.netlify.app/" target="_blank" rel="noreferrer">
              CRUD API from scratch
            </Link>
            . The Frontend is built with React/NextJS and the backend uses a serverless architecture and runs on an
            express server that stores, modifies, deletes, and gets data from a MongoDB database. Other projects include
            open source projects like{" "}
            <Link href="https://kantan-components-docs.netlify.app/docs/intro" target="_blank" rel="noreferrer">
              Kantan-Components
            </Link>{" "}
            and{" "}
            <Link href="https://kantan-hooks-docs.netlify.app/docs/intro/" target="_blank" rel="noreferrer">
              Kantan-Hooks
            </Link>
            , which are collections of custom React Hooks and re-usable React Components that abstract repetitive tasks
            or simplify complicating Web APIs. Both open source projects are actively maintained by me.
          </Text>

          <Text indent={1}>
            Currently, I'm working on getting better at TypeScript and the backend, and I plan to start learning Python
            and MySql. If you have time, please browse through my{" "}
            <StyledLink underline={1} nopadding={1} normalFont={1} to="./project">
              Projects
            </StyledLink>
            .
          </Text>

          <Text>
            If you are interested to learn more about me or have interesting offers, please{" "}
            <TextLink href="mailto:yuta.mori.licht@gmail.com">email me</TextLink>.
          </Text>
        </Paper>
      </Container>
    </>
  );
};

export default About;
