import React from "react";
import styled from "styled-components";

const TagStyled = styled.article`
  padding: 5px;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  gap: 5px;
  p {
    background-color: ${props => props.theme.background};
    margin: 0;
    padding: 6px;
    font-size: 0.6rem;
    border-radius: 5px;
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagStyled>
      {tags.map(({ tag, id }) => (
        <p key={id}>{tag}</p>
      ))}
    </TagStyled>
  );
};

export default Tags;
