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
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  close: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

const NAV_ICON = {
  "/": { Icon: HomeIcon, text: "Home" },
  "/project": { Icon: HighlightIcon, text: "Project" },
  "/contact": { Icon: MailIcon, text: "Contact Me" }
};

export default function Drawer({ open, onOpen, onClose }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
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
        {Object.entries(NAV_ICON).map(([link, { Icon, text }]) => (
          <StyledLink to={link} key={link} nopadding="true" tabIndex={0}>
            <ListItem button>
              <ListItemIcon>{<Icon />}</ListItemIcon>

              <ListItemText>{text}</ListItemText>
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer anchor="left" open={open} onClose={onClose} onOpen={onOpen}>
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
