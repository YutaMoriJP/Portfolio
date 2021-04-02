import React from "react";
import { Zoom } from "react-awesome-reveal";
import TextGradient from "../../StyledComponent/TextGradient";

/*
”bounce", "flash", "headShake”, "heartBeat", "jello”, "pulse", "rubberBand", “shake”, “shakeX", "shakeY”, "swing”, "tada" and “wobble”.

*/
const Text = ({ children, header, delay }) => {
  return (
    <Zoom triggerOnce delay={delay}>
      {header ? (
        <TextGradient variant="h4">{children}</TextGradient>
      ) : (
        <TextGradient variant="h4">{children}</TextGradient>
      )}
    </Zoom>
  );
};

export default Text;
