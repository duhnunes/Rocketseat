import { Minus, Plus } from "@phosphor-icons/react"
import { InputContainer } from "./styles"

export const InputNumber = () => {
  return(
    <InputContainer>
      <Minus />
      <input type="number" placeholder="1" min="1" max="10" />
      <Plus />
    </InputContainer>
  )
}