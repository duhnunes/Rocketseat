interface CardImageProps {
  src: string
  alt?: string
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return(
    <img src={src} alt={alt} />
  )
}
