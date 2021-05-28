import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  gap: 4px;
  select {
    padding: 5px;
  }
  label {
    align-self: center;
  }
`;

const Select = ({ options, label = "label", onChange }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select onChange={onChange} id={label}>
        {options.map(option => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
