import { ShoppingCartSimple } from "@phosphor-icons/react"
import { Button } from "../../../../components/Button"
import { InputNumber } from "../../../../components/InputNumber"
import { CardActions, CardContainer, CardCounter, CardDescription, CardPrice } from "./styles"
import { Badge } from "../../../../components/Badge"

interface CardProps {
  src: string
  alt: string
}

export const Card = ({ src, alt }: CardProps) => {
  return(
    <CardContainer>
        <img src={src} alt={alt} />

      <CardDescription>
        <Badge />
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feitto com água quente e grãos moídos</p>
      </CardDescription>

      <CardActions>
        <CardPrice>
          <span>R$</span>
          <span>9.90</span>
        </CardPrice>

        <CardCounter>
          <InputNumber />
          <Button variant='icon'>
            <ShoppingCartSimple size={16} weight="fill"  />
          </Button>
        </CardCounter>
      </CardActions>
      
    </CardContainer>
  )
}