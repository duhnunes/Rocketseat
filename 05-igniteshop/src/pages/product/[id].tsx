import { ShoppingBag } from 'lucide-react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { IProduct } from '@/contexts/CartContext'
import { useCart } from '@/hooks/useCart'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/products'

interface productProps {
  product: IProduct
}

export default function Product({ product }: productProps) {
  const { isFallback } = useRouter()

  const { checkIfItemAlreadyExists, addToCart } = useCart()

  if (isFallback) {
    return <p>Loading</p>
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <footer>
            <button
              type="button"
              disabled={itemAlreadyInCart}
              onClick={() => addToCart(product)}
            >
              {itemAlreadyInCart ? (
                'Produto já na sacola'
              ) : (
                <>
                  Adicionar à sacola
                  <ShoppingBag />
                </>
              )}
            </button>
          </footer>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / mais acessados

  return {
    paths: [{ params: { id: 'prod_QUA18uI8M2p1nw' } }],
    fallback: true,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return <p>Error</p>
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const unitAmount = price?.unit_amount ?? 0

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(unitAmount / 100),
        numberPrice: unitAmount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}
