import Wrapper from "./styled";
import React from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const Scroll = ({ behavior = "smooth", block = "start" }) => {
  const handleClick = () => document.body.scrollIntoView({ block, behavior });

  return (
    <>
      <Wrapper onClick={handleClick} right={block === "start" ? 1 : 0} left={block === "end" ? 1 : 0}>
        {block === "start" ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
      </Wrapper>
    </>
  );
};

export default Scroll;
