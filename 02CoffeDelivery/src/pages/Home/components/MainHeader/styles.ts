import styled, { css } from "styled-components"
import { ThemeType } from "../../../../@types/styles"

export const TitleMainHeaderContainer = styled.section`
  display:flex;
  align-items:center;
  justify-content:space-between;

  width:100%;
`

const variantStyle = (theme: ThemeType, variant='primary') => ({
  outline: css`
    color:${theme["yellow-dark"]};
    
    text-transform:uppercase;
    border:1px solid ${theme.yellow};
  `,
} [variant])

interface VariantProps{
  variant: string
}

export const FilterContainer = styled.section<VariantProps>`
  display:flex;
  align-items:center;
  gap: 0.5rem;

  span{
    border-radius:100px;
    font:${(props) => props.theme.tag};

    padding:0.375rem 0.75rem;

    cursor:pointer;
    
    ${({theme, variant}) => variantStyle(theme, variant)};

    &.active{
      color:${(props) => props.theme.white};
      background-color:${(props) => props.theme.yellow};
    }
  }
`
