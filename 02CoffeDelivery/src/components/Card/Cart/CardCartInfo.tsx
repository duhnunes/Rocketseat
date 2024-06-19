import { Trash } from "@phosphor-icons/react"
import { Button } from "../../Button"
import { InputNumber } from "../../InputNumber"
import { InfoContainer, InfoProductButtons } from "../styles"


interface CardCartInfo {
  title: string
}

export const CardCartInfo = ({ title }: CardCartInfo) => {
  return(
    <InfoContainer>
      <h3>{title}</h3>
      <InfoProductButtons>
        <InputNumber />
        <Button variant="secondary">
          <Trash />
          Remover
        </Button>
      </InfoProductButtons>
    </InfoContainer>
  )
}
