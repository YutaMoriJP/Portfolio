import styled from "styled-components";

const Footer = styled.footer`
  padding: 40px 80px;
  background: ${props => props.theme.footerBg};
  color: ${props => props.theme.color};
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  column-gap: 20px;
  @supports not (column-gap: 20px) {
    margin: 10px;
  }
  @media (max-width: 600px) {
    padding: 30px;
  }
`;

export const Left = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 0.6rem;
  > * {
    margin: 0;
  }
  p {
    color: ${props => props.theme.footerColor};
  }
`;

export const Right = styled.article`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
`;

export const LinksWrapper = styled.article`
  display: flex;
  flex-direction: column;
  text-align: left;
  > *:first-child {
    font-weight: 900;
  }
  > *:first-child::after {
    content: ":";
  }
  > * {
    margin: 0;
  }
`;

export default Footer;
