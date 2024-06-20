import { ShoppingCart, Wallet } from "@phosphor-icons/react";
import { Card } from "../../../../components/Card"
import { CartContainer, CartFooter, CartHeader, CartItemsContainer } from "./styles"

import coffee from '/assets/coffee/Type=Expresso.png';
import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";

export const Cart = () => {
  return(
    <CartContainer>
      <CartHeader>
        <ShoppingCart size={24} weight="fill" />
        <p>Carrinho de Compras</p>
      </CartHeader>
      <hr />

      <CartItemsContainer>
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
        <Card.Root variant="cart">
          <Card.Img src={coffee} alt="" />
          <Card.Cart.Info title="Expresso tradicional" />
          <Card.Price value="9,90" />
        </Card.Root>
        <hr />
        
      </CartItemsContainer>

      <CartFooter>
        <Link to="/checkout">
          <Button variant="primary">
            <Wallet size={24} weight="fill" />
            Terminar Compra
          </Button>
        </Link>
      </CartFooter>
    </CartContainer>
  )
}