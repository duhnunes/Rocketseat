/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBase } from "./styles"

interface InputProps{
  type?: string
  name?: string
  id?: string
  placeholder?: string

  onChange?: (event: any) => void
  value?: string
}

export const Input = ({ type = "text", ...props }: InputProps) => {
  return(
    <InputBase
      type={type}
      {...props}
    />
  )
}
