import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyle from "../../GlobalStyle/useStyle";
import ThemeButton from "../Button/ThemeButton";
import StyledLink from "../../StyledComponent/StyledLink";

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.appbar} elevation={10}>
      <Toolbar variant="dense">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/code-examples">Code Examples</StyledLink>
        <StyledLink to="/playground">Playground</StyledLink>
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
