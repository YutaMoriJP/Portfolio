import React from "react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { useGlobalContext } from "../../ContextProvider/ContextProvider";
import IconButton from "@material-ui/core/IconButton";
import useStyle from "../../GlobalStyle/useStyle";

const ThemeButton = () => {
  const { isDark, setIsDark } = useGlobalContext();
  const handleClick = () => setIsDark(prevIsDark => !prevIsDark);
  const classes = useStyle();

  return (
    <article className={classes.themeButton}>
      {isDark ? (
        <IconButton onClick={handleClick}>
          <Brightness7Icon />
        </IconButton>
      ) : (
        <IconButton onClick={handleClick}>
          <Brightness2Icon />
        </IconButton>
      )}
    </article>
  );
};

export default ThemeButton;
