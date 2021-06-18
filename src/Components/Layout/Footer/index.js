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
        </LinksWrapper>
      </Right>
    </Wrapper>
  );
};

export default Footer;
