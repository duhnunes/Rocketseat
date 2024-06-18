import { ReactNode } from "react"
import { CardContainer } from "./styles"

interface CardRoot {
  children: ReactNode
}

export const CardRoot = ({ children }: CardRoot) => {
  return(
    <CardContainer variant="shopping">
      {children}
    </CardContainer>
  )
}
