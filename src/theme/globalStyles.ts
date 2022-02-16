import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export default createGlobalStyle`
    html {
        font-size: 16px;
    }
    
    body {
        font-family: 'Satoshi';
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.777em;
        margin: 0;

        * {
            box-sizing: border-box;
        }
    }

    @font-face {
        font-family: 'Satoshi';
        src: local('Sathoshi'), local('Satoshi'),
        url(${require("./fonts/Satoshi-Bold.eot")}) format('embedded-opentype'),
        url(${require("./fonts/Satoshi-Bold.ttf")}) format('truetype'),
        url(${require("./fonts/Satoshi-Bold.woff")}) format('woff2'),
        url(${require("./fonts/Satoshi-Bold.woff2")}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: local('Satoshi'), local('Satoshi'),
        url(${require("./fonts/Satoshi-Medium.eot")}) format('embedded-opentype'),
        url(${require("./fonts/Satoshi-Medium.ttf")}) format('truetype'),
        url(${require("./fonts/Satoshi-Medium.woff")}) format('woff2'),
        url(${require("./fonts/Satoshi-Medium.woff2")}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Satoshi';
        src: local('Satoshi'), local('Satoshi'),
        url(${require("./fonts/Satoshi-MediumItalic.eot")}) format('embedded-opentype'),
        url(${require("./fonts/Satoshi-MediumItalic.ttf")}) format('truetype'),
        url(${require("./fonts/Satoshi-MediumItalic.woff")}) format('woff2'),
        url(${require("./fonts/Satoshi-MediumItalic.woff2")}) format('woff');
        font-weight: 500;
        font-style: italic;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        margin-top: 0px;
    }
    
    h1 {
        font-size: 68px;
        line-height: 1.3em;
        margin-bottom: 24px;
    }
    
    h2 {
        font-size: 42px;
        line-height: 1.38em;
        margin-bottom: 1rem;
    }
    
    h3 {
        font-size: 24px;
        line-height: 1.333em;
        margin-bottom: 20px;
    }
    
    h4 {
        font-size: 22px;
        line-height: 1.272em;
        margin-bottom: 1rem;
    }
    
    h5 {
        font-size: 18px;
        line-height: 1.333em;
        margin-bottom: 1rem;
    }
    
    h6 {
        font-size: 1rem;
        line-height: 1.375em;
        margin-bottom: 1rem;
    }

    p {
        margin: 0 0 20px;
    }

    i {
        font-style: italic;
    }

    a {
        color: ${colors.neutral.neutral800};
        transition: color 300ms ease;
        text-decoration: underline;
    }
    
    p a {
        &:hover {
            background: ${colors.secondary.secondary400};
            color: ${colors.neutral.neutral700};
        }
    }

    ol, ul {
        margin-top: 0px;
        margin-bottom: 10px;
        padding-left: 40px;
    }

    ::selection {
        background: ${colors.secondary.secondary200};
    }

    mark {
        background-color: ${colors.secondary.secondary200};
        color: ${colors.neutral.neutral700};
    }
`;
