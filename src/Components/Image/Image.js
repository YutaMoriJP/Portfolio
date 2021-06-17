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
  alt = "not found image",
  width,
  height,
}) => {
  const handleError = event => {
    event.target.src = placeholder;
  };
  const handleSuccess = event => {
    console.log(event);
    event.target.src = placeholder;
  };
  return (
    <ImageStyled
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      onSuccess={handleSuccess}
    />
  );
};
/*

const ImageStyled = styled.img`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "200px"};
`;

const Image = ({
  src = placeholder,
  alt = "not found image",
  width,
  height,
}) => {
  return <ImageStyled src={src} alt={alt} width={width} height={height} />;
};

*/
export default Image;
