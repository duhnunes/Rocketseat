import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
  body{
    background-color:${props => props.theme["base-background"]};
    color:${props => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font:400 1rem Nunito, sans-serif;
  }

  button{
    border:0;
    background:transparent;
    cursor:pointer;

    user-select:none;
    -ms-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;
  }

  a{
    display:flex;
    align-items:center;
    gap:0.5rem;

    font-weight: bold;
    color:${props => props.theme.blue};
    text-transform:uppercase;
    text-decoration:none;
    
    border-bottom:1px solid transparent;
    
    cursor:pointer;
    transition:border-bottom .6s;
    
    &:hover{
      border-bottom:1px solid currentColor;
    }
  }
`
