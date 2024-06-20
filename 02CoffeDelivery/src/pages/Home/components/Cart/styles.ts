import styled from "styled-components";

export const CartContainer = styled.section`
  display:flex;
  flex-direction:column;
  
  position:fixed;
  right:0;
  top:3.75rem;
  padding: 0.75rem;
  height:calc(100svh - 7.5rem);

  background-color:${(props) => props.theme["base-card"]};
  box-shadow:-1px 0 2px 0 rgba(0 0 0 / .25);

  border-top-left-radius:66px;
  border-bottom-left-radius:66px;

  animation:openCart .2s linear;

  @keyframes openCart{
    from{
      translate:100% 0;
    }
    to{
      translate:0 0;
    }
  }
`

export const CartHeader = styled.article`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 0.5rem;

  padding:0.5rem 0 1.25rem;
  
  p{
    font:${(props) => props.theme["title-m"]};
    color:${(props) => props.theme["base-title"]};
    text-transform:uppercase;
  }

  svg{
    color:${(props) => props.theme["yellow-dark"]};
  }
`

export const CartItemsContainer = styled.article`
  flex:1;
  display:flex;
  flex-direction:column;
  gap:0.75rem;

  padding:0.75rem 0;
  overflow-y:auto;
`

export const CartFooter = styled.article`
  display:flex;
  align-items:center;
  justify-content:center;

  padding-top:1rem;
  border-top:1px solid ${(props) => props.theme["base-title"]};

  svg{
    color:${(props) => props.theme.background};
  }

  a{
    text-decoration:none;
  }
`