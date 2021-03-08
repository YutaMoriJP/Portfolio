import styled from "styled-components";

export const StackContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: auto;
  @media screen and (min-width: 800px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const StackData = styled.h3`
  width: 100%;
  padding: 20px;
  margin: 0;
  background-color: darkcyan;
  border-radius: 10px;
`;
