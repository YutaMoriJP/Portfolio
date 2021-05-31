import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.theme.link.color};
  text-decoration: underline;
  font-weight: 900;
`;

export default Link;
