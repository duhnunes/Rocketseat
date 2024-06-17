import styled from "styled-components";

export const CardContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;

  background-color:${(props) => props.theme["base-card"]};

  margin:0.375rem;
  margin-top:1.5625rem;
  width:16rem;
  height:19.375rem;

  border-top-left-radius:6px;
  border-top-right-radius:36px;
  border-bottom-left-radius:36px;
  border-bottom-right-radius:6px;

  img{
    margin-top:-1.5rem;
    margin-bottom:0.75rem;
  }
`

export const CardDescription = styled.article`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  /* justify-content:center; */
  gap: 0.5rem;
  
  h2{
    margin-top:1rem;
    font:${(props) => props.theme["title-s"]};
  }

  p{
    font:${(props) => props.theme["text-s"]};
    color:${(props) => props.theme["base-label"]};
    text-align:center;
  }
`

export const CardActions = styled.article`
  display:flex;
  align-items:center;
  justify-content:space-between;

  width:100%;
  padding:0 1.5rem 1.25rem;
`

export const CardPrice = styled.div`
  display:flex;
  align-items:center;
  gap: 0.25rem;

  color:${(props) => props.theme["base-text"]};

  span{
    font:${(props) => props.theme["text-s"]};
    margin-top:0.25rem;
    text-transform:uppercase;
  }

  span + span{
    font:${(props) => props.theme["title-m"]};
    margin-top:0;
  }
`

export const CardCounter = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
`