import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position:fixed;
  top:0;

  background-color:${(props) => props.theme.background};

  display:flex;
  align-items:center;
  justify-content:space-between;

  width:100%;
  padding:0.625rem 10rem;

  a{
    display:flex;
    align-items:center;
    
    outline:none;
  }
`

export const Information = styled.section`
  display: flex;
  align-items:center;
  gap:0.75rem;
`
