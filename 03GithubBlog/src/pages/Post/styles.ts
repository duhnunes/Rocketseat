import styled from "styled-components";

export const PostContainer = styled.main`
  display:flex;
  flex-direction:column;
  justify-content:center;

  padding:0 1.25rem;
  margin:0 auto;
  max-width:864px;
`

export const PostHeader = styled.section`
  display:flex;
  flex-direction:column;
  gap:2rem;

  width:100%;
  padding:2rem 2.5rem;
  margin-top:-5rem;
  
  background-color:${props => props.theme["base-profile"]};
  border-radius:10px;

  position:relative;

  h1{
    font-size:1.5rem;
    color:${props => props.theme["base-title"]};
  }
`

export const PostLinks = styled.article`
  display:flex;
  align-items:center;
  justify-content:space-between;

  a{
    font-size:0.75rem;
  }
`

export const PostStatistics = styled.article`
  display:flex;
  align-items:center;
  gap:2rem;
`

export const PostIcons = styled.div`
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

export const PostContent = styled.section`
  padding:2.5rem 2rem;

  span{
    color:${props => props.theme.blue};
  }
`
