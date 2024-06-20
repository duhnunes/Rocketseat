import { ReactNode } from "react"
import { CardActionsContainer } from "../styles"

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
