import { CardActionsContainer } from "./styles"
import { ReactNode } from "react"

interface CardActionsProps {
  children: ReactNode
}

export const CardActions = ({ children }: CardActionsProps) => {
  return(
    <CardActionsContainer>
      {children}
    </CardActionsContainer>
  )
}
