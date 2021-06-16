import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
