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
  filter: brightness(0.2);

  :hover {
    filter: brightness(1);
  }

  :active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.right &&
    css`
      right: 0;
    `}

  ${(props) =>
    props.left &&
    css`
      left: 0;
    `}

  svg {
    width: 100%;
    height: 60%;
    color: var(--icon-primary-color);
  }
`;

export default Icon;
