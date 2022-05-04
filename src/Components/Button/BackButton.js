import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const BackButton = ({ children, color = "primary" }) => {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <Button variant="contained" color={color} startIcon={<ArrowBackIcon />} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default BackButton;
