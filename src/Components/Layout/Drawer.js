import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import StyledLink from "../../StyledComponent/StyledLink";
import HighlightIcon from "@material-ui/icons/Highlight";
import PaletteIcon from "@material-ui/icons/Palette";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  close: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const navText = {
  "/": "Home",
  "/project": "Project",
  "/code-examples": "Code Examples",
  "/playground": "Playground",
  "/about": "About me",
  "/skills": "Skills",
  "/contact": "Contact Me",
};

const NavIcon = {
  "/": <HomeIcon />,
  "/project": <HighlightIcon />,
  "/code-examples": <PaletteIcon />,
  "/about": <AccountBoxIcon />,
  "/skills": <BuildIcon />,
  "/contact": <MailIcon />,
};

export default function Drawer({ open, onOpen, onClose }) {
  const classes = useStyles();

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={onClose}
    >
      <article className={classes.close}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </article>
      <Divider />
      <List>
        {["/", "/project", "/skills", "/about", "/contact"].map(
          (text, index) => (
            <StyledLink
              to={text}
              key={text}
              nopadding="true"
              tabIndex={index + 1}
            >
              <ListItem button>
                <ListItemIcon>{NavIcon[text]}</ListItemIcon>
                <ListItemText>{navText[text]}</ListItemText>
              </ListItem>
            </StyledLink>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
/*
 {["/", "/project", "/code-examples", "/playground"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <StyledLink to={`${text}`}>{text}</StyledLink>
            </ListItem>
          )
        )}
        */
