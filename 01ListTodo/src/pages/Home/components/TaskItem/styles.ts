import styled from "styled-components";

export const TaskItemContainer = styled.section`
  display:flex;
  gap:.75rem;
  align-items:center;

  width:100%;
  max-width:736px;
  padding:16px;

  border-radius:8px;
  background-color:${(props) => props.theme['gray-500']};

  transition:filter .25s;

  &:hover{
    filter:brightness(1.25);
  }

  p{
    flex:1;
  }

  &[type="checkbox"]:checked{
    background-color:${(props) => props.theme["gray-100"]};
    filter:brightness(2);
  }

  &.checked{
    filter:brightness(.9);
    cursor:default;
  }
`
