import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: OpenSans-Regular, PingFangSC-Regular, Arial, Helvetica,
}

html, body {
    overflow-x:hidden;
}

`;

export default GlobalStyle;
