import styled, { css } from "styled-components";
import { ThemeType } from "../../../../@types/styles";

const varyantStyles = (theme: ThemeType, variant = 'primary') => ({
  primary: css`
    color: ${theme["gray-100"]};
    background-color:${theme["blue-dark"]};

    &:hover{
      background-color:${theme.blue};
    }
  `,
  ghost: css`
    color:${theme["gray-300"]};
    background-color:transparent;
    padding:.125rem;
    border-radius:3px!important;

    &:hover{
      color:${theme.danger};
    }
  `,
  test: css`
    background-color:${theme.danger};
    width:100%;

    transition: translate .1s;

    &:hover{
      filter:brightness(.75);
    }

    &:focus{
      outline:0;
    }
  `
}[variant]);

interface VariantProps {
  variant?: string
}

export const ButtonBase = styled.button<VariantProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 0.5rem;

  padding:1rem;

  color:${(props) => props.theme['gray-100']};
  ${({ theme, variant }) => varyantStyles(theme, variant)};
  
  border:none;
  border-radius:8px;

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
