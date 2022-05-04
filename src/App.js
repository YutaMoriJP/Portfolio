import React, { Suspense, lazy } from "react";
//ThemeProviders from styledComponent & materialUI
import ThemeProviders from "./GlobalStyle/ThemeProviders";
//Global Styled from styled component - html {...} body {...}
import StyledGlobal from "./GlobalStyle/StyledGlobal";
//CSS Reset
import CssBaseLine from "@material-ui/core/CssBaseline";

//React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Layout component
import Layout from "./Components/Layout/Layout";
//Loading component
import Loading from "./Components/Loading/Loading";
import ScrollToTop from "./Components/Scroll/index";

import { useThemeContext } from "./ContextProvider/ContextProvider";

const Home = lazy(() => import("./Pages/Home"));
const Project = lazy(() => import("./Pages/Project"));
const CodeExamples = lazy(() => import("./Pages/CodeExamples"));
const PlayGround = lazy(() => import("./Pages/PlayGround"));
const ErrorPage = lazy(() => import("./Pages/404"));
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const Contact = lazy(() => import("./Pages/Contact"));
const Resume = lazy(() => import("./Pages/Resume"));

const App = () => {
  const [theme] = useThemeContext();

  return (
    <>
      <ThemeProviders isDark={theme === "dark"}>
        <CssBaseLine />

        <StyledGlobal />

        <Router>
          <Layout isDark={theme === "dark"}>
            <ScrollToTop />

            <Suspense fallback={<Loading />}>
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

                <Route path="/about">
                  <About />
                </Route>

                <Route path="/skills">
                  <Skills />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/resume">
                  <Resume />
                </Route>

                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProviders>
    </>
  );
};

export default App;
