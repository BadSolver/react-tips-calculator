import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
Body {
        background: #EAF2F2;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        color: #000;
            &::after {
                content: '';
                position: absolute;
                top: -95px;
                left: -13px;
                background:rgba(133, 211, 202, 0.31);
                width: 250px;
                height: 250px;
                border-radius: 50%;
            }
            &::before {
                content: '';
                position: absolute;
                top: -42px;
                left: -102px;
                background:rgba(133, 211, 202, 0.31) ;
                width: 250px;
                height: 250px;
                border-radius: 50%;
            }
}
`;

