import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, margin: 15 }}>
        <h1>Thank you for visting the about page to learn more about me!</h1>
        <Divider />
        <p>
          Hi I am Yuta. I am a Japanese who grew up in Germany, and spent the
          last 8 years finishing my highschool and university in Canada. I have
          earned a major in Philosophy and minor in Business from the University
          of Victoria.
        </p>

        <p>
          After my graduation, I have worked a year as a Performance Marketing
          Specialist at Global Wide Media. I specialized on search ads like
          Google Ads and Bing ads for clients like Dropbox and Roblox. As a
          performance marketer, I had many opportunities to build landing pages
          for my clients promoting their products. I already had experience in
          HTML, CSS, and JavaScript before my work as a performance marketer,
          and the additional experience of building landing pages for my clients
          gave me the dream of becoming a front end web developer.
        </p>

        <p>
          I spent the past year intensively developing my knowledge and skills
          in JavaScript, becoming proficient in libraries like React. To display
          my skills in React and JavaScript in general, I have built a diverse
          amount of projects like a news fetching website, using the NYT API, as
          well as built a simple CRUD API from scratch.
        </p>

        <p>
          Currently, I am learning TypeScript and Next.js and I plan to start
          learning Vue.js soon. If you have time, please browse through my
          projects. It would be awesome if you could take a chance on me :) I
          hope to hear from you soon.
        </p>
      </Paper>
    </Container>
  );
};

export default About;
