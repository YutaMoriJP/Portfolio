import React from "react";
import styled from "styled-components";
import Select from "../Select/Select";

const Container = styled.article`
  margin: 10px;
  display: flex;
  justify-content: ${props =>
    ({ left: "flex-start", center: "center", right: "flex-end" }[
      props.position
    ] || "center")};
`;

const Filter = ({ options, position, setFilterBy }) => {
  const handleChange = event => setFilterBy(event.target.value);
  return (
    <>
      <Container position={position}>
        <Select options={options} label="Filter By" onChange={handleChange} />
      </Container>
    </>
  );
};

export default Filter;
