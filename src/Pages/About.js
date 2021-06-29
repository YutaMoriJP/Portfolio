import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Link from "../StyledComponent/Link";
import StyledLink from "../StyledComponent/StyledLink";
import TextLink from "../StyledComponent/Link";

import Helmet from "react-helmet";
import Text from "../StyledComponent/Text";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container maxWidth="md" style={{ minHeight: "100vh" }}>
        <Paper style={{ padding: 15, margin: "15px 5px" }}>
          <h1>ABOUT PAGE</h1>
          <Divider />
          <Text>
            Thank you for visiting my about page to learn more about me. My name
            is Yuta, I was born in Japan, but I grew up in Germany. Fluent in
            Japanese, German, and English. I have lived the last 8 years in
            Canada, completing my high school and university degree. I have
            earned a major in Philosophy and minor in Business from the
            University of Victoria.
          </Text>

          <Text>
            After my graduation, I have worked a year as a Performance Marketing
            Specialist at Global Wide Media. Before working as a performance
            marketer, I ran my own website business for 4 years, and generated
            more than $3000 in profit, and developed the website to one of the
            top 90,000th most visited websites world wide according to
            Alexa.com. So, I was able to smoothly transition from a publisher to
            a performance marketer. As a performance marketer, I specialized in
            search ads like Google Ads and Bing ads for clients like Dropbox,
            TikTok, Roblox, and more. I have also experience in other types of
            ads like display, push, contextual, native, and pop ads. As a
            performance marketer, I also had many opportunities to build landing
            pages for my clients promoting their products, as well as
            contributed to all of our WordPress blogs. The landing pages
            initiative helped me to maintain my average conversion rate around
            10%. I already had experience in HTML, CSS, and JavaScript before my
            work as a performance marketer, and the additional experience of
            building landing pages in my work as a performance marketer gave me
            the dream of becoming a front end web developer.
          </Text>

          <Text>
            I spent the past year intensively developing my knowledge and skills
            in JavaScript, becoming proficient in libraries like React. To
            display my skills in JavaScript and CSS, as well as JavaScript
            libraries, I have built a diverse amount of projects like a{" "}
            <Link
              href="https://xenodochial-mcclintock-d84f7d.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              news fetching website
            </Link>
            , using the NYT API, as well as built a simple{" "}
            <Link
              href="https://dazzling-wright-f8bd93.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              CRUD API from scratch
            </Link>
            ,
            <Link
              href="https://react-components-reusable.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              a collection of useful React Components
            </Link>
            ,
            <Link
              href="https://custom-react-hooks.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              a collection of custom React Hooks
            </Link>
            , and also CSS specific projects like a{" "}
            <Link
              href="https://csb-7slsg.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              website that provides useful CSS layouts.
            </Link>
          </Text>

          <Text>
            Currently, I am learning TypeScript and Next.js, and I plan to start
            learning Vue.js in the future. If you have time, please browse
            through my{" "}
            <StyledLink
              underline={1}
              nopadding={1}
              normalFont={1}
              to="./project"
            >
              projects
            </StyledLink>
            . It would be awesome if you could take a chance on me :) I hope to
            hear from you soon.
          </Text>

          <Text>
            If you are interested to learn more about me, please{" "}
            <TextLink href="mailto:yuta.mori.licht@gmail.com">
              email me
            </TextLink>
            .
          </Text>
        </Paper>
      </Container>
    </>
  );
};

export default About;
