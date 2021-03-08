import React, { useState } from "react";
import Stack from "../dataStructure/Stack";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { StackContainer, StackData } from "../styled/StyledStack";
import StyledButton from "../../../../StyledComponent/StyledButton";

const StackPlayGround = () => {
  const [{ stack }, setStack] = useState({
    stack: new Stack(10),
    count: 0,
  });
  const displayStack = stack.stack.head;
  const getStackData = linkedList => {
    let currentNode = linkedList;
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.getNextNode();
    }
    return arr;
  };
  const push = () => {
    stack.push(StackData);
    setStack(prevStack => ({
      stack: prevStack.stack,
      count: prevStack.count++,
    }));
  };
  const pop = () => {
    stack.pop();
    setStack(prevStack => ({
      stack: prevStack.stack,
      count: prevStack.count--,
    }));
  };
  return (
    <>
      <h1>Stack Playground</h1>
      <p>Stack size limit: {stack.maxSize}</p>
      <p>
        Current Size: {stack.size}{" "}
        {stack.size === 10
          ? "max size reached"
          : stack.size > 8
          ? "CLOSE TO LIMIT"
          : ""}
      </p>
      <StyledButton
        endIcon={<AddIcon />}
        onClick={push}
        color="primary"
        variant="contained"
      >
        PUSH
      </StyledButton>
      <StyledButton
        endIcon={<RemoveIcon />}
        onClick={pop}
        variant="contained"
        color="secondary"
      >
        POP
      </StyledButton>
      {displayStack && (
        <StackContainer>
          {getStackData(displayStack)
            .map((Visualized, index) => (
              <Visualized key={index}>{index + 1}</Visualized>
            ))
            .reverse()}
        </StackContainer>
      )}
    </>
  );
};

export default StackPlayGround;
