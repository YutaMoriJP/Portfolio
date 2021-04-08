import React, { Suspense, lazy } from "react";
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
//Project component
import Project from "./Pages/Project";

//custom context hook
import { useGlobalContext } from "./ContextProvider/ContextProvider";
//useStyle function using makeStyle
import useStyle from "./GlobalStyle/useStyle";

//const CodeExamples = loadable(() => import("./Pages/CodeExamples"));
const CodeExamples = lazy(() => import("./Pages/CodeExamples"));
const PlayGround = lazy(() => import("./Pages/PlayGround"));
const ErrorPage = lazy(() => import("./Pages/404"));

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
                <Suspense fallback={<div>Loading Content...</div>}>
                  <CodeExamples />
                </Suspense>
              </Route>
              <Route path="/playground">
                <Suspense fallback={<div>Loading Content...</div>}>
                  <PlayGround />
                </Suspense>
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route>
                <Suspense fallback={<div>Loading Content...</div>}>
                  <ErrorPage />
                </Suspense>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProviders>
    </Container>
  );
};

export default App;
