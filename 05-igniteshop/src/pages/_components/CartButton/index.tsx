import { ShoppingBag } from 'lucide-react'
import { ComponentProps } from 'react'

import { CartButtonContainer } from '@/styles/pages/components/cartButton'

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export default function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <ShoppingBag fontWeight="bold" />
    </CartButtonContainer>
  )
}
