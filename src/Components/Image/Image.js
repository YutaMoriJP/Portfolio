import React from "react";
import placeholder from "../../Images/notfound.jpeg";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageStyled = styled(LazyLoadImage)`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "200px"};
`;
const Image = ({
  src = placeholder,
  alt = "image not found",
  width,
  height,
}) => {
  const ref = React.useRef();
  const handleError = event => {
    event.target.src = placeholder;
  };
  React.useLayoutEffect(() => {
    if (!ref.current.src) {
      ref.current.src = placeholder;
    }
  }, []);
  return (
    <ImageStyled
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};
export default Image;
