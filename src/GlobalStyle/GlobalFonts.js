import { createGlobalStyle } from "styled-components";
import Montserrat from "../fonts/montserrat-v15-latin-regular.woff";
import Montserrat2 from "../fonts/montserrat-v15-latin-regular.woff2";

const GlobalFonts = createGlobalStyle`
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('${Montserrat2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('${Montserrat}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
`;

export default GlobalFonts;
