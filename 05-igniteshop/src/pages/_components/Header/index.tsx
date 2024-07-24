import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HeaderContainer } from '@/styles/pages/components/header'

import logoImg from '../../../../public/logo.svg'
import CartButton from '../CartButton'
import ShoppingCartComponent from '../ShoppingCartComponent'

export default function Header() {
  const pathname = usePathname()

  const showShoppingBag = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      {showShoppingBag && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton />
          </Dialog.Trigger>
          <Dialog.Portal>
            <ShoppingCartComponent />
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
