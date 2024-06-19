import { BadgeContainer } from "./styles"

interface BadgeProps {
  text: string
}

export const Badge = ({text}: BadgeProps) => {
  return(
    <BadgeContainer className="badge">
      {text}
    </BadgeContainer>
  )
}