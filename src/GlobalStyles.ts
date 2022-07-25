import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
        padding: 0;
        box-sizing: border-box;
}
body {
        background: #EAF2F2;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 400;
        color: #000;
        &::before {
            content: '';
            position: absolute;
            top: -108px;
            width: 250px;
            height: 250px;
            background-color: rgba(133, 211, 202, 0.31);
            border-radius: 50%;
        }
        &::after {
            content: '';
            position: absolute;
            left: -89px;
            top: -55px;
            width: 250px;
            height: 250px;
            background-color: rgba(133, 211, 202, 0.31);
            border-radius: 50%;
        }
}
`;

