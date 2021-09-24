import React from "react";
import Center from "../StyledComponent/Center";
import TextLink from "../StyledComponent/Link";
import Link from "../StyledComponent/StyledLink";
import Text from "../StyledComponent/Text";
import styled from "styled-components";
import Helmet from "react-helmet";

export const Wrapper = styled.article`
  width: 240px;
  height: 240px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.circle};
  @media screen and (max-width: 250px) {
    width: 200px;
    height: 200px;
  }
`;

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Center>
        <Wrapper>
          <Text>See my Links below:</Text>
          <TextLink href="mailto:yuta.mori.licht@gmail.com">Email me</TextLink>
          <TextLink
            href="https://github.com/YutaMoriJP"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </TextLink>
          <TextLink
            href="https://codesandbox.io/dashboard/drafts?workspace=e06bca6f-0c92-46e5-8f07-a3b58aa66c9c"
            target="_blank"
            rel="noreferrer"
          >
            CodeSandbox
          </TextLink>
          <Link to="/about">About me</Link>
          <TextLink
            href="https://edabit.com/user/PGCDJpQMN8Sjn9Gm6"
            target="_blank"
            rel="noreferrer"
          >
            Edabit - 30,000+XP
          </TextLink>
        </Wrapper>
      </Center>
    </>
  );
};

export default Contact;
