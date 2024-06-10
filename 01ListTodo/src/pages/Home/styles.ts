import styled from "styled-components";

export const MainContainer = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1.5rem;

  margin:64px auto 0;
  max-width:46rem;

  @media(max-width:768px){
   padding:0 .5rem; 
  }
`

export const HeaderContainer = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1.5rem;

  width:100%;
`

const BaseTaskText = styled.div`
  display:flex;
  align-items:center;
  gap: 0.5rem;

  font-size:.875rem;
  font-weight:700;
`

export const TaskTextCreated = styled(BaseTaskText)`
  color:${(props) => props.theme['blue']};
`

export const TaskTextFinished = styled(BaseTaskText)`
  color:${(props) => props.theme['purple']};
`

export const BaseBgTaskCounter = styled.span`
  background-color:${(props) => props.theme['gray-400']};
  color:${(props) => props.theme['gray-200']};

  border-radius:9999px;

  padding:2px 8px;
`

export const ContentContainer = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  position:relative;
  gap: 0.5rem;

  width:100%;
  padding:4rem 0;

  border-radius:8px;
  overflow:hidden;
  
  img{
    width:56px;
    height:56px;
  }
`

export const NoTasksContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;
  
  position:relative;
  text-align:center;
  
  p{
    font-weight:700;
    color:${(props) => props.theme['gray-300']};
  }
  p + p {
    font-weight:400;
  }
`
export const BorderTop = styled.div`
  border:1px solid ${(props) => props.theme['gray-400']};
  width:736px;
  
  position:absolute;
  top:0;
`
