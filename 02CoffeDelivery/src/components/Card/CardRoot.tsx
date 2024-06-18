import { ReactNode } from "react"
import { CardContainer } from "./styles"

interface CardRoot {
  children: ReactNode
  variant: string
}

export const CardRoot = ({ children, variant }: CardRoot) => {
  return(
    <CardContainer variant={variant}>
      {children}
    </CardContainer>
  )
}
