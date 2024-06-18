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

    &:hover{
      background-color:${theme["base-hover"]};
      color:${theme["base-subtitle"]};
    }

    & svg{
      color:${theme.purple};

      &:hover{
        color:${theme["purple-dark"]};
      }
    }
  `,
  icon: css`
    background-color:${theme["purple-dark"]};
    
    padding: 0.5rem;

    &:hover{
      background-color:${theme.purple};
    }
  `,
  select: css`
    background-color:${theme["base-button"]};
    color:${theme["base-text"]};
    gap: 0.75rem;

    &:hover{
      background-color:${theme["base-hover"]};
      color:${theme["base-subtitle"]};
    }

    &:focus, &:focus-within, &:active, &::selection, &.active{
      background-color:${theme["purple-light"]};
      outline:1px solid ${theme.purple};
    }

    & svg{
      color:${theme.purple};
    }
  `,
  shop: css`
    background-color:${theme["yellow-light"]};
    color:${theme["yellow-dark"]};

    padding: 0.5rem;

    &:hover{
      background-color:${theme["yellow-dark"]};
      color:${theme["yellow-light"]}
    }
  `,
  localization: css`
    padding:0.5rem;

    background-color:${(props) => props.theme["purple-light"]};
    color:${(props) => props.theme["purple-dark"]};

    text-transform:capitalize;
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

  &:active{
    translate:-1px 1px;
  }

  &:focus{
    outline:none;
  }

  ${({ theme, variant }) => variantStyles(theme, variant)};
  cursor:pointer;
  user-select:none;
  -ms-user-select:none;
  -moz-user-select:none;
  -webkit-user-select:none;
  
  transition:background-color .25s, color .25s, translate .1s;
`
