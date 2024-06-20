import { ReactNode } from "react"
import { CardBadgeContainer } from "../styles"

interface CardBadgeProps {
  children: ReactNode
}

export const CardBadge = ({ children }: CardBadgeProps) => {
  return(
    <CardBadgeContainer>
      {children}
    </CardBadgeContainer>
  )
}