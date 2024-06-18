import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display:flex;
  align-items:center;
  gap:0.25rem;

  padding:0.5rem;

  background-color:${(props) => props.theme["base-button"]};
  border-radius:6px;

  input{
    background-color:transparent;
    font:${(props) => props.theme["text-m"]};
    color:${(props) => props.theme["base-title"]};

    width:1.25rem;
    height:1.25rem;
    
    border:none;
    text-align:center;

    cursor:default;
    user-select:none;
    -ms-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
      appearance:none;
      -webkit-appearance: none;
      margin:0;
    }

    &[type="number"]{
      appearance: none;
      -moz-appearance: none;
    }

    &:focus{
      outline:none;
    }
  }

  svg{
    color:${(props) => props.theme["purple"]};
    font:${(props) => props.theme["text-l"]};

    cursor:pointer;
    transition:color .25s;
    user-select:none;
    -ms-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;

    &:hover{
      color:${(props) => props.theme["purple-dark"]};
    }
  }
`