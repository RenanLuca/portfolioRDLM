import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white : #fff;
        --background: #171717;
        --green: #27AE60;
        --gray-200: #828282;
        --gray-400: #535353;
        --gray-500: #4F4F4F;
        --gray-900: #202020;

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }
    body {
        background-color: var(--background); 
        padding: 0 10rem;   
        -webkit-font-smoothing: antialiased;  
        max-width: 90rem;
        margin: auto;
        @media (max-width: 768px) {
            padding: 0 3rem;
            overflow-wrap: break-word;
        }
    }
`