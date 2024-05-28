import styled, { css } from "styled-components";
import { ThemeType } from "../../../../@types/styles";

const varyantStyles = (theme: ThemeType, variant = 'primary') => ({
  primary: css`
    color: ${theme["gray-100"]};
    background-color:${theme["blue-dark"]};

    &:hover{
      background-color:${theme.blue};
      cursor:pointer;
    }
  `,
  ghost: css`
    color:${theme["gray-300"]};
    background-color:transparent;
    padding:0;

    height:24px;
    width:24px;

    &:hover{
      color:${theme.danger};
      cursor:pointer;
    }
  `,
}[variant]);

interface VariantProps {
  variant: string
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

  user-select:none;
  -ms-user-select:none;
  -moz-user-select:none;
  -webkit-user-select:none;
  transition:background-color .25s;
`
