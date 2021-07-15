import { createGlobalStyle } from "styled-components";
import Montserrat from "../fonts/montserrat-v15-latin-regular.woff";
import Montserrat2 from "../fonts/montserrat-v15-latin-regular.woff2";
import MontserratEot from "../fonts/montserrat-v15-latin-regular.eot";

const StyledGlobal = createGlobalStyle`
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(${MontserratEot}); /* IE9 Compat Modes */
  src: local('Montserrat'),
        url(${Montserrat}) format('woff2'), /* Super Modern Browsers */
       url(${Montserrat2}) format('woff'), /* Modern Browsers */ 
}

:root {
    --icon-primary-color: ${props => props.theme.color}
  }
  html {
        font-size: 14px; 
    } 
    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        text-align: center;
        margin: 0; //fixes weird dimension bug on mobile?
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
