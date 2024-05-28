import styled from "styled-components";

export const HeaderContainer = styled.header`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0.75rem;

  height:200px;

  background-color:${(props) => props.theme['gray-700']};

  img{
    position:relative;
    top:5px;
    
    -webkit-user-drag:none;
  }

  `
export const SpanContainer = styled.div`
  span{
    font-size:2.5rem;
    font-weight:700;
    color:${(props) => props.theme['blue']};

    user-select:none;
    -ms-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;
  }
  span + span{
    color:${(props) => props.theme['purple-dark']};
  }
`
