import Card from "../Components/Card/Card";
import projects from "../data/project";
import Grid from "@material-ui/core/Grid";
import { Project as ProjectStyled } from "../StyledComponent/StyledHome";
import Container from "@material-ui/core/Container";
import { Zoom } from "react-awesome-reveal";
/*
”bounce", "flash", "headShake”, "heartBeat", "jello”, "pulse", "rubberBand", “shake”, “shakeX", "shakeY”, "swing”, "tada" and “wobble”.

*/
const Project = () => {
  return (
    <Container>
      <Zoom triggerOnce>
        <ProjectStyled id="project">
          <h1>PROJECT</h1>　
          <Grid container spacing={5} justify="center">
            {projects.map(project => (
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
