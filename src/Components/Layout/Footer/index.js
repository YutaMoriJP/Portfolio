import React from "react";
import Wrapper, { Left, Right, LinksWrapper } from "./FooterStyled";
import TextLink from "../../../StyledComponent/Link";
import { ContactLink } from "../../../Pages/Contact";

const Footer = () => {
  return (
    <Wrapper id="footer">
      <Left>
        <p>
          This site was built with{" "}
          <TextLink href="https://create-react-app.dev/docs/getting-started/">Create-React-App.</TextLink>
        </p>

        <p>&#169;{new Date().getFullYear``} All Rights Reserved.</p>
      </Left>
      <Right>
        <LinksWrapper>
          <p>Links</p>

          <ContactLink />
        </LinksWrapper>
      </Right>
    </Wrapper>
  );
};

export default Footer;
