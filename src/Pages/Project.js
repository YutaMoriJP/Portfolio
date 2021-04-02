import Card from "../Components/Card/Card";
import projects from "../data/project";
import Grid from "@material-ui/core/Grid";
import { Project as ProjectStyled } from "../StyledComponent/StyledHome";
import Text from "../Components/Animation/Text";
import Container from "@material-ui/core/Container";

const Project = () => {
  return (
    <Container>
      <ProjectStyled id="project">
        <Text>PROJECT</Text>
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
    </Container>
  );
};

export default Project;
