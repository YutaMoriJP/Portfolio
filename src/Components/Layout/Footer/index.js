//contact just can up email for the user
//link github, edabit?, etc.
import React from "react";
import Wrapper, { Left, Right, LinksWrapper } from "./FooterStyled";
import TextLink from "../../../StyledComponent/Link";
import Link from "../../../StyledComponent/StyledLink";

const Footer = () => {
  return (
    <Wrapper id="footer">
      <Left>
        <p>
          This site was built with{" "}
          <TextLink href="https://create-react-app.dev/docs/getting-started/">Create-React-App.</TextLink>
        </p>

        <p>&#169;2021 All Rights Reserved.</p>
      </Left>
      <Right>
        <LinksWrapper>
          <p>Links</p>

          <TextLink href="mailto:yuta.mori.licht@gmail.com">Contact me</TextLink>

          <TextLink href="https://github.com/YutaMoriJP">Github</TextLink>

          <TextLink
            href="https://codesandbox.io/dashboard/drafts?workspace=e06bca6f-0c92-46e5-8f07-a3b58aa66c9c"
            target="_blank"
            rel="noreferrer"
          >
            CodeSandbox
          </TextLink>

          <Link to="/about">About me</Link>

          <TextLink href="https://edabit.com/user/PGCDJpQMN8Sjn9Gm6">Edabit - 30,000+XP</TextLink>
        </LinksWrapper>
      </Right>
    </Wrapper>
  );
};

export default Footer;
