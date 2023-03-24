import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    background-color: #282c34;
    color: white;
}

button{
    cursor: pointer;
}

li{
    list-style: none;
}

a{
    cursor: pointer;
}


`;
