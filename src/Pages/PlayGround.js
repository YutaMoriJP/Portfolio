import React from "react";
import {
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
//page that generates the play ground page
import DynamicPlayGround from "../Components/DataStructure/PlayGround/DynamicPlayGround";
//playground names
import playGroundData from "../Components/DataStructure/PlayGround/playGroundData";
import StyledLink from "../StyledComponent/StyledLink";
import SimpleList from "../Components/List/SimpleList";
import ListItem from "@material-ui/core/ListItem";

import Helmet from "react-helmet";

const PlayGround = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const pageNames = playGroundData.map(data => Object.keys(data)[0]);
  const history = useHistory();
  const handleClick = name => history.push(`${path}/${name}`);
  return (
    <>
      <Helmet>
        <title>Playground</title>
      </Helmet>
      {pathname === "/playground" && (
        <SimpleList>
          {pageNames.map((pageName, index) => (
            <ListItem button key={index} onClick={() => handleClick(pageName)}>
              <StyledLink to={`${path}/${pageName}`}>{pageName}</StyledLink>
            </ListItem>
          ))}
        </SimpleList>
      )}
      <Route path={`${path}/:dataName`}>
        <DynamicPlayGround />
      </Route>
    </>
  );
};

export default PlayGround;
