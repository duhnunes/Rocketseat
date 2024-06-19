import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react"

import brandLogo from '/Logo.svg'

import { Information, NavbarContainer } from "./styles"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return(
    <NavbarContainer>
      <Link to="/">
        <img src={brandLogo} alt="" />
      </Link>

      <Information>
        <Button variant="localization">
          <MapPin weight="fill" />
          Porto Alegre, RS
        </Button>
        <Link to="/checkout">
          <Button variant="shop">
            <ShoppingCartSimple  weight="fill" />
          </Button>
        </Link>
      </Information>
    </NavbarContainer>
  )
}
