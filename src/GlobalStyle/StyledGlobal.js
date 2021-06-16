import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
  html {
        font-size: 14px; 
    } 
    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        text-align: center;
    }
    h1, h2, h3 {
        font-family: 'Montserrat', sans-serif;        
    } 
    p {
        font-family: sans-serif;
    }
    @media screen and (min-width: 500px) {
        html {
            font-size: 16px
        }
    }
    @media screen and (min-width: 600px) {
        html {
            font-size: 18px;
        }
    }
`;

export default StyledGlobal;
