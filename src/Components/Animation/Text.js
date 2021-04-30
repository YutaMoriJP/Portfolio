import React from "react";
import { Zoom } from "react-awesome-reveal";
import TextGradient, { NonGradient } from "../../StyledComponent/TextGradient";

/*
”bounce", "flash", "headShake”, "heartBeat", "jello”, "pulse", "rubberBand", “shake”, “shakeX", "shakeY”, "swing”, "tada" and “wobble”.

*/
const Text = ({ children, header, delay, ...rest }) => {
  return (
    <Zoom triggerOnce delay={delay}>
      {header ? (
        <TextGradient {...rest}>{children}</TextGradient>
      ) : (
        <TextGradient {...rest}>{children}</TextGradient>
      )}
    </Zoom>
  );
};

export const NormalText = ({ children, header, delay, ...rest }) => {
  return (
    <Zoom triggerOnce delay={delay}>
      {header ? (
        <NonGradient {...rest}>{children}</NonGradient>
      ) : (
        <NonGradient {...rest}>{children}</NonGradient>
      )}
    </Zoom>
  );
};

export default Text;
