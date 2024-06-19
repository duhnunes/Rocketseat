import { CardDescriptionContainer } from "./styles"

interface CardDescriptionContainerProps {
  title?: string
  text?: string

  variant?: boolean
}

export const CardDescription = ({ title, text}: CardDescriptionContainerProps) => {

  return(
    <CardDescriptionContainer>
      <h2>{title}</h2>
      <p>{text}</p>
    </CardDescriptionContainer>
  )
}
