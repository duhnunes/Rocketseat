import styled from "styled-components";

export const InputBase = styled.input`
  padding:16px;
  flex:1;
  
  background-color:${(props) => props.theme['gray-500']};
  border:none;
  border-radius:8px;
  color:${(props) => props.theme['gray-100']};

  &::placeholder{
    color:${(props) => props.theme['gray-300']};
  }
`

export const Checkbox = styled.input`
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  position:relative;

  width:.875rem;
  height:.875rem;

  outline:2px solid ${(props) => props.theme.blue};
  border-radius:50%;

  transition:outline-color .15s;

  &:hover{
    outline-color:${(props) => props.theme["blue-dark"]}
  }
  
  &:checked{
    outline-color:${(props) => props.theme["purple-dark"]};
    background-color:${(props) => props.theme["purple-dark"]};

    transition:background-color .15s,
      outline-color .15s;

    &:hover{
      outline-color:${(props) => props.theme.purple};
      background-color:${(props) => props.theme.purple};
    }

    &::before{
      content:'✔';
      position:absolute;
      top:50%;
      left:50%;

      translate:-50% -50%;
      
      font-size:.75rem;

      color:${(props) => props.theme["gray-100"]};
    }
  }
`
