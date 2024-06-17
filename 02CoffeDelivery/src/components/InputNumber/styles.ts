import styled from "styled-components";

export const InputContainer = styled.div`
  display:flex;
  align-items:center;
  gap:0.25rem;

  padding:0.75rem 0.5rem;

  background-color:${(props) => props.theme["base-button"]};
  border-radius:6px;

  input{
    background-color:transparent;
    color:${(props) => props.theme["base-title"]};

    width:1.25rem;
    height:1.25rem;
    
    border:none;
    text-align:center;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin:0;
    }

    &[type="number"]{
      -moz-appearance: textfield;
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

    &:hover{
      color:${(props) => props.theme["purple-dark"]};
    }
  }
`