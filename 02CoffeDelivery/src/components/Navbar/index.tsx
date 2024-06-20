import { useState } from "react"
import { Link } from "react-router-dom"

import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react"
import brandLogo from '/Logo.svg'

import { Information, NavbarContainer } from "./styles"
import { Button } from "../../components/Button"
import { Cart } from "../../pages/Home/components/Cart"

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    console.log('Click on cart');
    setIsCartOpen((prev) => !prev);
  }
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
        <Button variant="shop" onClick={handleOpenCart}>
          <ShoppingCartSimple  weight="fill" />
        </Button>
      </Information>

      {isCartOpen && (
        <Cart />
      )}
    </NavbarContainer>
  )
}
