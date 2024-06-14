import styled, { css } from "styled-components";
import { ThemeType } from "../../@types/styles";

const variantStyles = (theme: ThemeType, variant = 'primary') => ({
  primary: css`
    background-color:${theme.yellow};
    padding:.75rem 2.8125rem;

    &:hover{
      background-color:${theme["yellow-dark"]};
    }
  `,
  secondary: css`
    background-color:${theme["base-button"]};
    color:${theme["base-text"]};

    padding:.40625rem .5rem;

    & svg{
      color:${theme.purple}
    }

    &:hover{
      background-color:${theme["base-hover"]};
      color:${theme["base-subtitle"]};
    }

    & svg:hover{
      color:${theme["purple-dark"]};
    }
  `,
  icon: css`
    background-color:${theme["purple-dark"]};
    
    padding: 0.5rem;

    &:hover{
      background-color:${theme.purple};
    }
  `,
}[variant])

interface VariantProps{
  variant?: string
}

export const ButtonBase = styled.button<VariantProps>`
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 0.25rem;

  border:none;
  border-radius:6px;

  padding:1rem;
  
  color:${(props) => props.theme.white};
  text-transform:uppercase;

  ${({ theme, variant }) => variantStyles(theme, variant)};
  cursor:pointer;
  user-select:none;
  -ms-user-select:none;
  -moz-user-select:none;
  -webkit-user-select:none;
  
  transition:background-color .25s, color .25s;

  &:active{
    translate:-1px 1px;
  }
`
