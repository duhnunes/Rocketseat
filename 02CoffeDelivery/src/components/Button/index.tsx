import { ReactNode } from "react"
import { ButtonBase } from "./styles"

interface ButtonProps{
  children: ReactNode

  type?: "button" | "submit" | undefined
  variant?: string
  title?: string
}

export const Button = ({
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  return(
    <ButtonBase
      type={type}
      {...props}
    >
      {children}
    </ButtonBase>
  )
}