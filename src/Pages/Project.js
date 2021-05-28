import { useState } from "react";
import Card from "../Components/Card/Card";
import projects from "../data/project";
import Grid from "@material-ui/core/Grid";
import { Project as ProjectStyled } from "../StyledComponent/StyledHome";
import Container from "@material-ui/core/Container";
import { Zoom } from "react-awesome-reveal";
import Filter from "../Components/Filter/Filter";
import options from "../data/projectOptions";

const Project = () => {
  const [filterBy, setFilterBy] = useState("all");
  const filterFunc = datas =>
    datas.filter(
      data =>
        filterBy === "all" || data.tags.some(({ tag }) => tag === filterBy)
    );
  return (
    <Container>
      <Zoom triggerOnce>
        <ProjectStyled id="project">
          <h1>PROJECTS</h1>　
          <Filter
            setFilterBy={setFilterBy}
            options={options}
            position="right"
          />
          <Grid container spacing={5} justify="center">
            {filterFunc(projects).map(project => (
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
      </Zoom>
    </Container>
  );
};

export default Project;
