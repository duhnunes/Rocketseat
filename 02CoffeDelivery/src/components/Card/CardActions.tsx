import { ShoppingCartSimple } from "@phosphor-icons/react"
import { Button } from "../Button"
import { InputNumber } from "../InputNumber"
import {
  CardActionsContainer,
  CardCounter,
  CardPrice
} from "./styles"

export const CardActions = () => {
  return(
    <CardActionsContainer>
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
      </CardActionsContainer>
  )
}