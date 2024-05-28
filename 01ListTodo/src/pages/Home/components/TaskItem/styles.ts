import styled from "styled-components";

export const TaskItemContainer = styled.section`
  display:flex;
  gap:.75rem;

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
`
