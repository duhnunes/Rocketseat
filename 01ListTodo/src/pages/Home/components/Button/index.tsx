import { ButtonBase } from "./styles"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: string

  onClick?: () => void
}

export const Button = ({ children, variant, onClick }: ButtonProps) => {
  return(
    <ButtonBase type="button" variant={variant} onClick={onClick}>
      {children}
    </ButtonBase>
  )
}