import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
export default function SimpleMenu({ menuitems, name = "Simple Menu" }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<MenuIcon />}
      >
        {name}
      </Button>
      <Menu
        style={{ width: "100%" }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuitems.map((menuItem, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
