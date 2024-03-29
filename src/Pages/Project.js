import { useState } from "react";
import Card from "../Components/Card/Card";
import projects from "../data/project";
import Grid from "@material-ui/core/Grid";
import { Project as ProjectStyled } from "../StyledComponent/StyledHome";
import Container from "@material-ui/core/Container";
import { Zoom } from "react-awesome-reveal";
import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";

const Project = () => {
  const { pathname } = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [filterBy, setFilterBy] = useState("all");

  const filterFunc = (datas) =>
    datas.filter((data) => filterBy === "all" || data.tags.some(({ tag }) => tag === filterBy));

  return (
    <>
      {pathname === "/project" && (
        <Helmet>
          <title>Project Page</title>
        </Helmet>
      )}

      <Container>
        {pathname !== "/project" ? (
          <Zoom triggerOnce>
            <ProjectStyled id="project">
              <h1>PROJECTS</h1>　
              <Grid container spacing={2} justify="center">
                {filterFunc(projects).map((project) => (
                  <Card
                    {...project}
                    header={project.name}
                    details={project.details}
                    img={project.img}
                    key={project.id}
                    description={project.description}
                    tags={project.tags}
                    url={project.url}
                  />
                ))}
              </Grid>
            </ProjectStyled>
          </Zoom>
        ) : (
          <ProjectStyled id="project">
            <h1>PROJECTS</h1>　
            <Grid container spacing={1} justify="center">
              {filterFunc(projects).map((project) => (
                <Card
                  header={project.name}
                  details={project.details}
                  img={project.img}
                  key={project.id}
                  description={project.description}
                  tags={project.tags}
                  url={project.url}
                />
              ))}
            </Grid>
          </ProjectStyled>
        )}
      </Container>
    </>
  );
};

export default Project;
