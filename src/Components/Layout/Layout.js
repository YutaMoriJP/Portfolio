import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/index";
import Container from "@material-ui/core/Container";
import useStyle from "../../GlobalStyle/useStyle";
import Notice from "../Notice/Notice";
import Scroll from "../Scroll/Scroll";

const Layout = ({ children }) => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Container className={classes.container} maxWidth="xl">
        <main>{children}</main>
      </Container>
      <Footer />
      <Notice />
      <Scroll />
    </>
  );
};

export default Layout;
