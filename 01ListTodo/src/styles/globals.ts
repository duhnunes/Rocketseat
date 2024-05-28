import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
  :root{
    font-optical-sizing:auto;
    line-height: 1.5;

    color-scheme: light dark;
    background-color:${(props) => props.theme['gray-600']};
    color:${(props) => props.theme.white};
  }

  :root, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight:400;
    font-size:1rem;
    -webkit-font-smoothing:antialiased;
  }

  :focus{
    outline:1px solid ${(props) => props.theme['purple-dark']};
  }
  
  @media (prefers-color-scheme: light) {
  :root {
    color:${(props) => props.theme.black};
    background-color:${(props) => props.theme['gray-200']};
  }
}
`
