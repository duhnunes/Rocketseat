import { Trash } from "@phosphor-icons/react"

import { Button } from "../../../../components/Button"
import { InputNumber } from "../../../../components/InputNumber"
import {
  CardContainer,
  InfoContainer,
  InfoProduct,
  InfoProductButtons,
  PriceContainer
} from "./styles"

interface CardProps {
  src: string
}

export const Card = ({ src }: CardProps) => {
  return(
    <CardContainer>
      <InfoContainer>
        <img src={src} alt="" />

        <InfoProduct>
          <h3>Expresso Tradicional</h3>
          <InfoProductButtons>
            <InputNumber />
            <Button variant="secondary">
              <Trash />
              Remover
            </Button>
          </InfoProductButtons>
        </InfoProduct>
      </InfoContainer>

      <PriceContainer>
        <span>R$</span>
        <span>9,90</span>
      </PriceContainer>
    </CardContainer>
  )
}