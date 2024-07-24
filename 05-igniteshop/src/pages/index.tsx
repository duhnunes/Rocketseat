import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import Stripe from 'stripe'

import { IProduct } from '@/contexts/CartContext'
import { useCart } from '@/hooks/useCart'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

import CartButton from './_components/CartButton'
import Skeleton from './_components/ProductSkeleton'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <Skeleton className="keen-slider__slide" />
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <header>
                <CartButton
                  onClick={(e) => handleAddToCart(e, product)}
                  disabled={checkIfItemAlreadyExists(product.id)}
                />
              </header>
              <div>
                <Link href={`/product/${product.id}`} prefetch={false}>
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={520}
                    height={480}
                  />

                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Link>
              </div>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const unitAmount = price?.unit_amount ?? 0

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(unitAmount / 100),
      numberPrice: unitAmount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2, // 2 hours
  }
}
