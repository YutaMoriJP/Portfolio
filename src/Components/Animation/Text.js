import React from "react";
import { Fade } from "react-awesome-reveal";
import Typography from "@material-ui/core/Typography";

const Text = ({ children, header }) => {
  return (
    <Fade direction="left" triggerOnce effect="bounce">
      {header ? (
        <Typography variant="h4">{children}</Typography>
      ) : (
        <Typography variant="h4">{children}</Typography>
      )}
    </Fade>
  );
};

export default Text;
