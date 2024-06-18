import styled from "styled-components";

export const BadgeContainer = styled.span`
  background-color:${(props) => props.theme["yellow-light"]};
  padding:0.25rem 0.5rem;

  color:${(props) => props.theme["yellow-dark"]};
  font:${(props) => props.theme.tag};
  text-transform:uppercase;

  border-radius:9999px;

  user-select:none;
  -ms-user-select:none;
  -moz-user-select:none;
  -webkit-user-select:none;
`