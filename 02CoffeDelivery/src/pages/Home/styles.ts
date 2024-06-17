import styled, { css } from "styled-components";
import { ThemeType } from "../../@types/styles";

export const IntroContainer = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-around;
  gap:3.5rem;

  margin-top:3.75rem;
  padding:5.75rem 10rem;
  width:100%;
  height:544px;

  background:url('/assets/Background.png') center/100% no-repeat;

  img{
    width:29.75rem;
    height:22.5rem;
  }
`

export const IntroInformationContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4.125rem;
`

export const Title = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;

  max-width:36.75rem;

  h1{
    font:${(props) => props.theme["title-xl"]};
    color:${(props) => props.theme["base-title"]};
  }
  
  p{
    font:${(props) => props.theme["text-l"]};
    color:${(props) => props.theme["base-subtitle"]};
  }
`

export const ItemsContainer = styled.section`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1.25rem;
`

const variantStyle = (theme: ThemeType, variant='primary') => ({
  'yellow-dark': css`
    background-color:${theme["yellow-dark"]};
  `,
  gray: css`
    background-color:${theme["base-text"]};
  `,
  yellow: css`
    background-color:${theme.yellow};
  `,
  purple: css`
    background-color:${theme.purple};
  `,
} [variant])

interface VariantProps{
  variant: string
}

export const InfoItems = styled.article<VariantProps>`
  display:flex;
  align-items:center;
  gap:0.75rem;

  svg{
    color:white;
    
    padding:0.5rem;
    width:2rem;
    height:2rem;

    border-radius:50%;

    ${({ theme, variant }) => variantStyle(theme, variant)}
  }
`
