import { ButtonBase } from "./styles"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant: string
}

export const Button = ({ children, variant }: ButtonProps) => {
  return(
    <ButtonBase type="button" variant={variant}>
      {children}
    </ButtonBase>
  )
}