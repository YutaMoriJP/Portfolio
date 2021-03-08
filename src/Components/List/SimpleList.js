import React from "react";
import List from "@material-ui/core/List";

const SimpleList = ({ children }) => {
  return <List component="nav">{children}</List>;
};

export default SimpleList;
