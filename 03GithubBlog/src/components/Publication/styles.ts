import styled from "styled-components";

export const PublicationContainer = styled.section`
  margin:4.5rem 0;
`

export const PublicationForm = styled.form`

  input{
    width:100%;
    margin:1rem 0 3rem;
    padding: 0.75rem 1rem;

    border:0;
    border-radius:6px;
    background-color:${props => props.theme["base-input"]};
    color:${props => props.theme["base-text"]};

    &:focus{
      outline:1px solid ${props => props.theme.blue};
    }
    
    &::placeholder{
      color:${props => props.theme["base-label"]};
    }
  }
`

export const PublicationsHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  h3{
    color:${props => props.theme["base-subtitle"]};
    font-size:1.125rem;
  }

  span{
    color:${props => props.theme["base-span"]};
    font-size:0.875rem;
  }
`

export const CardsGrid = styled.section`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:2rem;

  a{
    text-transform:none;
    text-decoration:none;
    color:currentColor;
    border:none;
    
    &:hover article{
      outline:2px solid ${props => props.theme["base-label"]};
    }
  }
`

export const Card = styled.article`
  display:flex;
  flex-direction:column;
  gap:1.25rem;

  max-height:16.25rem;
  padding:2rem;

  background-color:${props => props.theme["base-post"]};
  border-radius:10px;

  outline:2px solid transparent;
  transition:outline .6s;
`

export const CardHeader = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:space-between;

  h3{
    color:${props => props.theme["base-title"]};
    font-size:1.25rem;
    flex:1;
  }

  time{
    color:${props => props.theme["base-span"]};
    font-size:0.875rem;
    width:max-content;
  }
`

export const CardContent = styled.div`
  display:-webkit-box;
  -webkit-line-clamp:5;
  line-clamp:5;
  -webkit-box-orient:vertical;
  height:7rem;
  overflow:hidden;
`
