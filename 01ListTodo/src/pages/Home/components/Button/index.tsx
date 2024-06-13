import { ButtonBase } from "./styles"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  
  variant?: string
  type?: "button" | "submit" | undefined
  title?: string

  onClick?: () => void
}

export const Button = ({ children, type = "button", ...props }: ButtonProps ) => {
  return(
    <ButtonBase type={type} {...props}>
      {children}
    </ButtonBase>
  )
}
