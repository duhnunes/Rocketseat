import { Minus, Plus } from "@phosphor-icons/react"
import { InputNumberContainer } from "./styles"
import { useState } from "react"

export const InputNumber = () => {
  const [numberAmount, setNumberAmount] = useState(0);

  const handlePlusNumber = () => {
    const counter = (numberAmount + 1)
    setNumberAmount(counter);
  }

  const handleMinusNumber = () => {
    const counter = (numberAmount - 1)
    if(numberAmount >= 1){
      setNumberAmount(counter);
    }
  }

  return(
    <InputNumberContainer>
      <Minus
        onClick={handleMinusNumber}
      />
      <input
        type="number"
        value={numberAmount}
        readOnly
      />
      <Plus
        onClick={handlePlusNumber}
      />
    </InputNumberContainer>
  )
}
