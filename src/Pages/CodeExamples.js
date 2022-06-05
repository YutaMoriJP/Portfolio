import React from "react";
import { useRouteMatch, Route, useHistory, useLocation } from "react-router-dom";
import StyledLink from "../StyledComponent/StyledLink";
// array that contains the name of the data structutes
import dataStructureName from "../CodeExamples/dataStructureName";
// component that displays the data structure code example, which is dynamically generated page
import DataDisplay from "../Components/DataStructure/DataStructureDisplay";
// material ui for display list data
import SimpleList from "../Components/List/SimpleList";
import ListItem from "@material-ui/core/ListItem";
import algorithm from "../CodeExamples/algorithm";
import Helmet from "react-helmet";

const CodeExamples = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const history = useHistory();

  const handleClick = (name) => history.push(`${path}/${name}`);

  return (
    <>
      <Helmet>
        <title>Code Examples</title>
      </Helmet>
      {/^\/?code-examples\/?$/.test(pathname) && (
        <>
          <h1>Data Structures</h1>
          <SimpleList component="nav">
            {dataStructureName.map((name, index) => (
              <ListItem button key={index} onClick={() => handleClick(name)}>
                <StyledLink to={`${path}/${name}`}>{name}</StyledLink>
              </ListItem>
            ))}
          </SimpleList>

          <h1>Algorithm</h1>
          <SimpleList>
            {algorithm.map(({ name }, index) => (
              <ListItem button key={index} onClick={() => handleClick(name)}>
                <StyledLink to={`${path}/${name}`}>{name}</StyledLink>
              </ListItem>
            ))}
          </SimpleList>
        </>
      )}

      <Route path={`${path}/:dataName`}>
        <DataDisplay />
      </Route>
    </>
  );
};

export default CodeExamples;
