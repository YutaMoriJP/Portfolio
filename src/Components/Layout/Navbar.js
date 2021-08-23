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
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const NavBar = styled(AppBar)`
  background: ${props => props.theme.navColor};
`;

const Navbar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <NavBar position="static" className={classes.appbar} elevation={10}>
      <Toolbar variant="dense">
        {matches && (
          <Container
            maxWidth="xl"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "80%",
              maxWidth: "1200px",
            }}
          >
            <StyledLink to="/" tabindex={1}>
              Home
            </StyledLink>
            <StyledLink to="/project" tabindex={2}>
              Project
            </StyledLink>
            <StyledLink to="/skills" tabindex={3}>
              Skills
            </StyledLink>
            <StyledLink to="/about" tabindex={4}>
              About me
            </StyledLink>
            <StyledLink to="/contact" tabindex={5}>
              Contact me
            </StyledLink>
          </Container>
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
    </NavBar>
  );
};

export default Navbar;
