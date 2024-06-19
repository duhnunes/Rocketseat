import {
  CardFooterContainer,
} from "./styles"
import { ReactNode } from "react"

interface CardActionsProps {
  children: ReactNode
}

export const CardFooter = ({ children }: CardActionsProps) => {
  return(
    <CardFooterContainer>
      {children}
    </CardFooterContainer>
  )
}