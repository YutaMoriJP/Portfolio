import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Link from "../StyledComponent/Link";
import StyledLink from "../StyledComponent/StyledLink";
import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container maxWidth="md" style={{ minHeight: "100vh" }}>
        <Paper style={{ padding: 20, margin: 15 }}>
          <h1>ABOUT PAGE</h1>
          <Divider />
          <p>
            Thank you for visting my about page to learn more about me! My name
            is Yuta, and I am a Japanese who grew up in Germany. I am trilingual
            and fluent in Japanese, German, and English. I have spent the last 8
            years in Canada, finishing my highschool and university degree. I
            have earned a major in Philosophy and minor in Business from the
            University of Victoria.
          </p>

          <p>
            After my graduation, I have worked a year as a Performance Marketing
            Specialist at Global Wide Media. Before working as a performance
            marketer, I ran my own website business for 4 years, and generated
            more than $3000 in profit and made it among the top 80,000 most
            visited websites according to Alexa.com. So, I was able smoothly
            transition from a publisher to a performance marketer. As a
            performance marketer, I specialized in search ads like Google Ads
            and Bing ads for clients like Dropbox, TikTok, Roblox, and more! I
            have also experience in other types of ads like display, push,
            contextual, native, and pop ads. As a performance marketer, I also
            had many opportunities to build landing pages for my clients
            promoting their products, as well as contributed to all of our
            WordPress blogs. I already had experience in HTML, CSS, and
            JavaScript before my work as a performance marketer, and the
            additional experience of building landing pages for my clients gave
            me the dream of becoming a front end web developer.
          </p>

          <p>
            I spent the past year intensively developing my knowledge and skills
            in JavaScript, becoming proficient in libraries like React. To
            display my skills in JavaScript and CSS, as well as libraries, I
            have built a diverse amount of projects like a{" "}
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
            , and also CSS specific projects like a{" "}
            <Link
              href="https://csb-7slsg.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              website that provides useful CSS layouts.
            </Link>
          </p>

          <p>
            Currently, I am learning TypeScript and Next.js, and I plan to start
            learning Vue.js soon. If you have time, please browse through my{" "}
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
          </p>
        </Paper>
      </Container>
    </>
  );
};

export default About;
