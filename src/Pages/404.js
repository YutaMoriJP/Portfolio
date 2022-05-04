import React from "react";
import { useLocation } from "react-router-dom";
import Center from "../StyledComponent/Center";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import StyledLink from "../StyledComponent/StyledLink";
import Home from "@material-ui/icons/Home";

// Styled component
const Path = styled.p`
  background-color: #ced4da;
  display: inline;
  color: ${props => props.theme.black};
`;

const ErrorPage = () => {
  const { pathname } = useLocation();
  
  return (
    <Center column={true}>
      <h1>
        The page <Path>{pathname}</Path> you looked for was not found
      </h1>
      <StyledLink to="/">
        <Button
          size="large"
          color="primary"
          variant="contained"
          endIcon={<Home />}
        >
          Go back to Homepage
        </Button>
      </StyledLink>
    </Center>
  );
};

export default ErrorPage;
