import styled from "styled-components";

export const ProfileContainer = styled.section`
  display:flex;
  align-items:center;
  gap:2rem;

  padding:2rem 2.5rem;
  margin-top:-5rem;
  
  background-color:${props => props.theme["base-profile"]};
  border-radius:10px;

  position:relative;
`

export const ProfileContent = styled.article`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:0.5rem;

  height:100%;
`

export const ProfileTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  h2{
    color:${props => props.theme["base-title"]};
    font-size:1.5rem;
  }

  a{
    font-size:0.75rem;
  }
`

export const ProfileSocialLinks = styled.div`
  display:flex;
  align-items:center;
  gap:1.5rem;

  margin-top:1rem;
`

export const ProfileIcons = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;

  svg{
    color:${props => props.theme["base-label"]};
  }

  span{
    color:${props => props.theme["base-span"]};
  }
`