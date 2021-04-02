import React from "react";
import { Zoom } from "react-awesome-reveal";
import Typography from "@material-ui/core/Typography";
/*
”bounce", "flash", "headShake”, "heartBeat", "jello”, "pulse", "rubberBand", “shake”, “shakeX", "shakeY”, "swing”, "tada" and “wobble”.

*/
const Text = ({ children, header, delay }) => {
  return (
    <Zoom triggerOnce delay={delay}>
      {header ? (
        <Typography variant="h4">{children}</Typography>
      ) : (
        <Typography variant="h4">{children}</Typography>
      )}
    </Zoom>
  );
};

export default Text;
