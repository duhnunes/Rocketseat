import styled from "styled-components";

export const CardContainer = styled.section`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;

  background-color:${(props) => props.theme["base-card"]};

  padding:0.5rem 0.25rem;
`

export const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  gap:1.25rem;

  img{
    width:64px;
    height:64px;
  }
`

export const InfoProduct = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;

  h3{
    font:${(props) => props.theme["text-m"]};
    color:${(props) => props.theme["base-subtitle"]};
  }
`

export const InfoProductButtons = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
`

export const PriceContainer = styled.div`

  span{
    font:${(props) => props.theme["text-m"]};
    color:${(props) => props.theme["base-text"]};
  }
`
