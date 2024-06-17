import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  :root{
    font-optical-sizing:auto;
    line-height:1.5rem;

    color-scheme:light dark;
    background-color:${(props) => props.theme.background};
    color:${(props) => props.theme["base-text"]};
  }

  :root, input-security, textarea, button{
    font:${(props) => props.theme["text-m"]};
    -webkit-font-smoothing:antialiased;
  }

  :focus{
    outline: 1px solid ${(props) => props.theme.yellow}
  }
`