import { CardPriceContainer } from "./styles"

interface CardPriceProps {
  value: string
}

export const CardPrice = ({ value }: CardPriceProps) => {
  return(
    <CardPriceContainer className="price">
      <span>R$</span>
      <span>{value}</span>
    </CardPriceContainer>
  )
}
