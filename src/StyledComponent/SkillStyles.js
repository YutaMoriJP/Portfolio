import styled from "styled-components";

const SkillsContainer = styled.article`
  h1 {
    color: ${props => props.theme.skills.titleColor};
  }
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  background: ${props => props.theme.skills.containerBg};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
`;

const Lists = styled.article`
  border-radius: 5px;
  background: ${props => props.theme.skills.itemBG};
  padding: 10px;
  text-align: left;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  span {
    font-weight: 900;
  }
  p {
    padding: 4px;
    margin: 0;
    color: ${props => props.theme.skills.itemColor};
  }
  p:first-child {
    font-weight: 900;
    color: ${props => props.theme.link.color};
  }
  p:nth-child(2) {
    padding-left: 35px;
  }
  p:nth-child(3) {
    font-weight: 600;
    color: ${props => props.theme.link.color};
  }
  p:nth-child(4) {
    padding-left: 35px;
  }
  margin: 0 10px;
`;

const Canvas = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  > * {
    flex: 0 1 350px;
  }
`;

export { Canvas, SkillsContainer, Lists };
