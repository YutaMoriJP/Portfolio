import React from "react";

import Helmet from "react-helmet";
import resume from "../files/resume.pdf";
import Center from "../StyledComponent/Center";
import { Wrapper } from "./Contact";
import Download from "../Components/Download/index";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Center>
        <Wrapper>
          <Download url={resume} download="resume.pdf" />
        </Wrapper>
      </Center>
    </>
  );
};

export default Resume;
