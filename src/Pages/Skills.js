import React from "react";
import Container from "@material-ui/core/Container";
import Helmet from "react-helmet";
import { tools, languages } from "../data/skills";
import { Canvas, SkillsContainer, Lists } from "../StyledComponent/SkillStyles";

const Language = ({ header, language, experience }) => {
  return (
    <Lists>
      {header && <p>{header}:</p>}

      {language && <p>{language}</p>}

      {experience && (
        <>
          <p>Experience:</p>
          <p>{experience}</p>
        </>
      )}
    </Lists>
  );
};

const Skill = ({ datas, children }) => {
  return (
    <SkillsContainer>
      <h1>{children}</h1>

      {datas.map((data) => (
        <Language key={data.id} {...data} />
      ))}
    </SkillsContainer>
  );
};

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills Page</title>
      </Helmet>

      <Container maxWidth="md">
        <h1>SKILLS</h1>

        <Canvas>
          <Skill datas={languages}>Languages and Libraries:</Skill>

          <Skill datas={tools}>Dev Tools and Toolchains:</Skill>
        </Canvas>
      </Container>
    </>
  );
};

export default Skills;
