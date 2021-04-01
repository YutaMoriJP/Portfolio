import React from "react";
//ThemeProviders from styledComponent & materialUI
import ThemeProviders from "./GlobalStyle/ThemeProviders";
//Global Styled from styled component
import StyledGlobal from "./GlobalStyle/StyledGlobal";
//CSS Reset
import CssBaseLine from "@material-ui/core/CssBaseline";
//Container from material UI
import Container from "@material-ui/core/Container";
//React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Layout component
import Layout from "./Components/Layout/Layout";
//Page components
import Home from "./Pages/Home";
import CodeExamples from "./Pages/CodeExamples";
import ErrorPage from "./Pages/404";
import PlayGround from "./Pages/PlayGround";
import Project from "./Pages/Project";

//custom context hook
import { useGlobalContext } from "./ContextProvider/ContextProvider";
//useStyle function using makeStyle
import useStyle from "./GlobalStyle/useStyle";

const App = () => {
  const { isDark } = useGlobalContext();
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <ThemeProviders isDark={isDark}>
        <CssBaseLine />
        <StyledGlobal />
        <Router>
          <Layout isDark={isDark}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/code-examples">
                <CodeExamples />
              </Route>
              <Route path="/playground">
                <PlayGround />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProviders>
    </Container>
  );
};

export default App;
