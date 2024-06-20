import styled, { css } from "styled-components";
import { ThemeType } from "../../@types/styles";

export const CheckoutContainer = styled.main`
  display:flex;
  align-items:flex-start;
  justify-content:center;
  gap:6.375rem;

  margin-top:6.25rem;
`
export const RequestContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  

  width:40rem;
  
  h2{
    font:${(props) => props.theme["title-xs"]};
    color:${(props) => props.theme["base-subtitle"]};

    margin-bottom:0.9375rem;
  }
`

export const RequestCard = styled.section`
  display:flex;
  flex-direction:column;
  gap:2rem;
  
  background-color:${(props) => props.theme["base-card"]};

  width:100%;
  max-height:34rem;
  padding:2.5rem;
  margin-bottom:0.75rem;

  border-radius:6px;

  hr{
    border:1px solid ${(props) => props.theme["base-button"]};
  }
`

export const RequestCardItems = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  gap: 0.5rem;

  width:101%;
  overflow-y:scroll;
  
  &::-webkit-scrollbar{
    width:0.25rem;
  }
  
  &::-webkit-scrollbar-thumb{
    background-color:${(props) => props.theme["base-subtitle"]};
    border-radius:999px;
    opacity:.5;
  }
`

const variantStyle = (theme: ThemeType, variant='primary') => ({
  primary: css`
    color:${theme["yellow-dark"]};
  `,
  secondary: css`
    color:${theme.purple};
  `,
}[variant])

interface headerProps {
  variant?: string
}

export const RequestHeader = styled.header<headerProps>`
  display:flex;
  align-items:flex-start;
  gap:0.5rem;

  svg{
    ${({theme, variant}) => variantStyle(theme, variant)};
  }

  h3{
    font:${(props) => props.theme["text-m"]};
    color:${(props) => props.theme["base-subtitle"]};
  }

  span{
    font:${(props) => props.theme["text-s"]};
    color:${(props) => props.theme["base-text"]};
  }
`

export const RequestForm = styled.form`
  display:flex;
  flex-direction:column;
  gap:1rem;

  input{
    background-color:${(props) => props.theme["base-input"]};
    color:${(props) => props.theme["base-label"]};
    font:${(props) => props.theme["text-s"]};

    padding:0.75rem;

    border:none;
    border-radius:4px;

    &:first-child{
      max-width:12.5rem;
    }
  }
`

export const InputContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:0.75rem;

  .flex-1{
    flex:1;
  }

  .uf{
    max-width:3.75rem;
    text-transform:uppercase;
  }
`

export const RequestButtons = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0.75rem;

  button{
    flex:1;
    justify-content:flex-start;

    font:${(props) => props.theme["button-s"]};
    text-transform:uppercase;
  }
`

export const SelectedProductContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  
  width:28rem;

  border-top-left-radius:6px;
  border-top-right-radius:44px;
  border-bottom-left-radius:44px;
  border-bottom-right-radius:6px;
  
  h2{
    font:${(props) => props.theme["title-xs"]};
    color:${(props) => props.theme["base-subtitle"]};

    margin-bottom:0.9375rem;
  }
`

export const TotalContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.75rem;
`

export const TotalItem = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  .bold{
    font:${(props) => props.theme["text-l"]};
    color:${(props) => props.theme["base-subtitle"]};
  }
`

export const PanelContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:2.5rem;

  h2{
    font:${(props) => props.theme["title-l"]};
    color:${(props) => props.theme["yellow-dark"]};
  }
  span{
    font:${(props) => props.theme["text-l"]};
    color:${(props) => props.theme["base-subtitle"]};
  }
`

export const OrderInfoContainer = styled.section`
  display:flex;
  flex-direction:column;
  gap:2rem;
  position:relative;
  
  width:32.875rem;
  padding:2.5rem;
  
  border-top-left-radius:6px;
  border-top-right-radius:36px;
  border-bottom-left-radius:36px;
  border-bottom-right-radius:6px;
  background-color:${(props) => props.theme.background};

  &:before{
    content:'';
    position:absolute;
    top:-1px;
    bottom:-1px;
    left:-1px;
    right:-1px;
    z-index:-1;
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    border-radius:inherit;
  }
`

const OrderVariantStyle = (theme: ThemeType, variant = '') => ({
  primary: css`
    background-color:${theme.purple};
  `,
  secondary: css`
    background-color:${theme.yellow};
  `,
  third: css`
    background-color:${theme["yellow-dark"]};
  `,
}[variant])

interface OrderInfoItemProps {
  variant: string
}

export const OrderInfoItem = styled.article<OrderInfoItemProps>`
  display:flex;
  align-items:flex-start;
  gap:0.75rem;

  svg{
    color:${(props) => props.theme.background};
    
    padding:0.5rem;
    width:2rem;
    height:2rem;

    border-radius:50%;
    
    ${({ theme, variant }) => OrderVariantStyle(theme, variant)};
  }
`

export const MotoboyContainer = styled.div`
  display:flex;
  align-self:flex-end;
  justify-content:center;
`
