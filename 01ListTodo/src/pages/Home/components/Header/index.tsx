import { HeaderContainer, SpanContainer } from "./Header"

import logo from '/public/rocket.svg'

export const Header = () => {
  return(
    <HeaderContainer>
      <img
        src={logo}
        alt=""
      />
      
      <SpanContainer>
        <span>to</span>
        <span>do</span>
      </SpanContainer>
    </HeaderContainer>
  )
}