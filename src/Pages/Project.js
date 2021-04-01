import Card from "../Components/Card/Card";
import projects from "../data/project";
import Grid from "@material-ui/core/Grid";
import { Project as ProjectStyled } from "../StyledComponent/StyledHome";
import Title from "../StyledComponent/Title";

const Project = () => {
  return (
    <ProjectStyled id="project">
      <Title variant="h4">Projects:</Title>
      <Grid container spacing={5} justify="center">
        {projects.map(project => (
          <Card
            header={project.name}
            img={project.img}
            key={project.id}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </Grid>
    </ProjectStyled>
  );
};

export default Project;
