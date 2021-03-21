import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
         }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        margin-bottom: 2rem;
        h2 {
            font-size: 3rem;
            font-family: 'Comfortaa', cursive;
            font-weight: lighter;
            font-size:5vh;
            color: #333;
        }
        h3 {
            font-size:1.3rem;
            color: #333;
            padding: 1.5rem 0rem;
        }
        p {
            font-size: 1.2rem;
            line-height: 150%;
            color: #696969;
        }
        a {
            text-decoration: none;
            color: #333;
             
        }
        img {
            display : block;
        }
    }

`;

export default GlobalStyles;
