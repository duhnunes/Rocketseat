import { CardDescription } from "./styles"

interface CardDescriptionProps {
  title: string
  text: string
}

export const CardContent = ({ title, text }: CardDescriptionProps) => {
  return(
    <CardDescription>
      <h2>{title}</h2>
      <p>{text}</p>
    </CardDescription>
  )
}