import axios from 'axios'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { useCart } from '@/hooks/useCart'
import {
  ButtonClose,
  CardContent,
  Content,
  Header,
  Overlay,
  ShoppingCartCard,
  ShoppingCartItemsContainer,
  TotalItemsCart,
} from '@/styles/pages/components/shoppingcart'

export default function ShoppingCartComponent() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Overlay />

      <Content>
        <Header>
          Sacola de compras
          <ButtonClose>
            <X size={24} />
          </ButtonClose>
        </Header>
        <ShoppingCartItemsContainer>
          {cartQuantity >= 0 ? (
            cartItems.map((item) => {
              return (
                <ShoppingCartCard key={item.id}>
                  <Image src={item.imageUrl} alt="" width={100} height={93} />

                  <CardContent>
                    <div>
                      <p>{item.name}</p>
                      <strong>{item.price}</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeCartItem(cartItems[0].id)}
                    >
                      Remover
                    </button>
                  </CardContent>
                </ShoppingCartCard>
              )
            })
          ) : (
            <p>Carrinho vazio</p>
          )}
        </ShoppingCartItemsContainer>
        <footer>
          <TotalItemsCart>
            <p>Quantidade</p>
            <span>
              {cartQuantity === 1
                ? `${cartQuantity} item`
                : `${cartQuantity} itens`}
            </span>
            <p>Valor total</p>
            <span>{formattedCartTotal}</span>
          </TotalItemsCart>
          <button
            onClick={handleCheckout}
            disabled={isCreatingCheckoutSession || cartQuantity <= 0}
          >
            Finalizar compra
          </button>
        </footer>
      </Content>
    </>
  )
}
