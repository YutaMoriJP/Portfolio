import styled, { css } from "styled-components";

const Icon = styled.article`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
  svg {
    width: 100%;
    height: 60%;
    color: var(--icon-primary-color);
  }
  ${props =>
    props.right &&
    css`
      right: 0;
    `}
  ${props =>
    props.left &&
    css`
      left: 0;
    `}
`;

export default Icon;
