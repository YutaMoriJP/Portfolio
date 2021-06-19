//contact just can up email for the user
//link github, edabit?, etc.
import React from "react";
import Wrapper, { Left, Right, LinksWrapper } from "./FooterStyled";
import TextLink from "../../../StyledComponent/Link";
import Link from "../../../StyledComponent/StyledLink";

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <p>
          This site was built with{" "}
          <TextLink
            href="https://create-react-app.dev/docs/getting-started/"
            target="_blank"
            rel="noreferrer"
          >
            Create-React-App.
          </TextLink>
        </p>
        <p>&#169;2021 All Rights Reserved.</p>
      </Left>
      <Right>
        <LinksWrapper>
          <p>Links</p>
          <Link to="/about">About me</Link>
          <TextLink href="#">Contact me</TextLink>
          <TextLink
            href="https://edabit.com/user/PGCDJpQMN8Sjn9Gm6"
            target="_blank"
            rel="noreferrer"
          >
            Edabit - 30,000XP
          </TextLink>
          <TextLink
            href="https://github.com/YutaMoriJP"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </TextLink>
        </LinksWrapper>
      </Right>
    </Wrapper>
  );
};

export default Footer;
