import React from "react";
import { useParams } from "react-router-dom";
import playGroundData from "./playGroundData";

const DynamicPlayGround = () => {
  const { dataName } = useParams();
  const dataStructure = playGroundData.find(
    playGround => playGround[dataName]
  ) || { [dataName]: null };
  const PlayGroundComponent = dataStructure[dataName];
  if (!PlayGroundComponent) {
    return <h1>{dataName} is not a valid page</h1>;
  }
  return <PlayGroundComponent />;
};

export default DynamicPlayGround;
