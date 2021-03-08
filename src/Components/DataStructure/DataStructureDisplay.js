import React from "react";
import { useParams } from "react-router-dom";
import dataStructure from "../../CodeExamples/dataStructure";
import Code from "../Code/Code";
import Helmet from "react-helmet";
//material ui containers
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const DataDisplay = () => {
  const { dataName } = useParams();
  const code = dataStructure.find(data => data[dataName]) || {
    [dataName]: `() => 'nothing found'`,
    explanation: "not found",
  };
  return (
    <>
      <Helmet>
        <title>{dataName}</title>
      </Helmet>
      <h1>{dataName}</h1>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Typography variant="body1">{code.explanation}</Typography>
        </Grid>
      </Grid>
      <Code>{code[dataName]}</Code>
    </>
  );
};

export default DataDisplay;
