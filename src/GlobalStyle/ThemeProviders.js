import React, { useMemo } from "react";
//Theme Providers
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
//theme objects
import { styledTheme, materialColors } from "./theme";

const ThemeProviders = ({ isDark, children }) => {
  const materialTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDark ? "dark" : "light",
          primary: {
            main: isDark ? materialColors.primary.dark : materialColors.primary.light
          },
          secondary: {
            main: isDark ? materialColors.secondary.dark : materialColors.secondary.light
          }
        }
      }),
    [isDark]
  );

  return (
    <StyledThemeProvider theme={isDark ? styledTheme.dark : styledTheme.light}>
      <MaterialThemeProvider theme={materialTheme}>{children}</MaterialThemeProvider>
    </StyledThemeProvider>
  );
};

export default ThemeProviders;
