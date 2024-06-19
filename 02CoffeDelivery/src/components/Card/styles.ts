import styled, { css } from "styled-components";

const variantStyle = (variant = 'shopping') => ({
  shopping: css`
    flex-direction:column;
    align-items:center;
    
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

    .price > span{
      font:${(props) => props.theme["text-s"]};
      margin-top:0.25rem;
      text-transform:uppercase;
    }

    .price > span + span{
      font:${(props) => props.theme["title-m"]};
      margin-top:0;
    }
  `,
  cart: css`
    align-items:flex-start;
    justify-content:space-between;
    gap:1.25rem;
    
    padding:0.5rem 0.25rem;

    img{
      width:64px;
      height:64px;
    }

    span{
      font:${(props) => props.theme["text-m"]};
      color:${(props) => props.theme["base-text"]};
    }
  `,
}[variant])

interface CardContainerProps {
  variant?: string
}

export const CardContainer = styled.section<CardContainerProps>`
  display:flex;

  background-color:${(props) => props.theme["base-card"]};

  ${({ variant }) => variantStyle(variant)};
`

export const CardDescriptionContainer = styled.article`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 0.5rem;

  padding:0 0.5rem;
  
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

export const CardBadgeContainer = styled.article`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  padding:0 0.5rem;
  gap:0.25rem;
`

export const CardFooterContainer = styled.article`
  display:flex;
  align-items:center;
  justify-content:space-between;

  width:100%;
  padding:0 1.5rem 1.25rem;
`

export const CardPriceContainer = styled.div`
  display:flex;
  align-items:center;
  gap: 0.25rem;

  color:${(props) => props.theme["base-text"]};
`

export const CardActionsContainer = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
`

export const InfoContainer = styled.div`
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
