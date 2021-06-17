import React from "react";
import placeholder from "../../Images/notfound.jpeg";
import styled from "styled-components";

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

export default Image;
