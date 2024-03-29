import React from "react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { useThemeContext } from "../../ContextProvider/ContextProvider";

import IconButton from "@material-ui/core/IconButton";
import useStyle from "../../GlobalStyle/useStyle";

const ThemeButton = () => {
  const [theme, setTheme] = useThemeContext();
  const handleClick = () => setTheme(theme === "dark" ? "light" : "dark");

  const classes = useStyle();

  return (
    <article className={classes.themeButton}>
      {theme === "dark" ? (
        <IconButton onClick={handleClick} aria-label="Change to Light Theme">
          <Brightness7Icon />
        </IconButton>
      ) : (
        <IconButton onClick={handleClick} aria-label="Change to Dark Theme">
          <Brightness2Icon />
        </IconButton>
      )}
    </article>
  );
};

export default ThemeButton;
