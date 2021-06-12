import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyle from "../../GlobalStyle/useStyle";
import ThemeButton from "../Button/ThemeButton";
import StyledLink from "../../StyledComponent/StyledLink";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "./Drawer";

const Navbar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <AppBar position="static" className={classes.appbar} elevation={10}>
      <Toolbar variant="dense">
        {matches && (
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/project">Project</StyledLink>
            <StyledLink to="/skills">Skills</StyledLink>
            <StyledLink to="/about">About me</StyledLink>
          </>
        )}
        {!matches && (
          <IconButton
            onClick={() => setOpen(prevOpen => !prevOpen)}
            aria-label="navbar icon"
          >
            <MenuIcon />
          </IconButton>
        )}
        <ThemeButton />
      </Toolbar>
      <Drawer open={open} onOpen={onOpen} onClose={onClose} />
    </AppBar>
  );
};

export default Navbar;
