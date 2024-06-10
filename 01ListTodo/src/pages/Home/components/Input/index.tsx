/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBase } from "./styles"

interface InputProps{
  type: string
  name?: string
  id?: string
  placeholder?: string

  onChange?: (event: any) => void
  value?: string
}

export const Input = ({ type, name, placeholder, id, onChange, value }: InputProps) => {
  return(
    <InputBase
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}
