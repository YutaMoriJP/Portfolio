import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/index";
import Container from "@material-ui/core/Container";
import useStyle from "../../GlobalStyle/useStyle";

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <>
      <Navbar />
      <Container className={classes.container} maxWidth="xl">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
