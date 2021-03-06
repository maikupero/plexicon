import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    body {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        height: 100vh;
        margin: 0;
        padding: 0;

        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        transition: all 0.25s linear;
    }
`;

export {GlobalStyles};