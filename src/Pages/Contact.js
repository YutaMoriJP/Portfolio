import React from "react";
import Center from "../StyledComponent/Center";
import TextLink from "../StyledComponent/Link";
import Link from "../StyledComponent/StyledLink";
import Text from "../StyledComponent/Text";
import styled from "styled-components";
export const Wrapper = styled.article`
  width: 220px;
  height: 220px;
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
        <Link to="/about">About me</Link>
        <TextLink
          href="https://edabit.com/user/PGCDJpQMN8Sjn9Gm6"
          target="_blank"
          rel="noreferrer"
        >
          Edabit - 30,000XP
        </TextLink>
      </Wrapper>
    </Center>
  );
};

export default Contact;
