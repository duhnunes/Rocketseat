import { CardRoot } from "./CardRoot"
import { CardImage } from "./CardImage"


import { CardDescription } from "./CardDescription"
import { CardBadge } from "./CardBadge"
import { CardFooter } from "./CardFooter"
import { CardPrice } from "./CardPrice"
import { CardActions } from "./CardActions"
import { CardCartInfo } from "./Cart/CardCartInfo"


export const Card = {
  Root: CardRoot,
  Img: CardImage,
  Description: CardDescription,
  Footer: CardFooter,
  Badges: CardBadge,
  Price: CardPrice,
  Actions: CardActions,
  Cart: {
    Info: CardCartInfo,
  }
}
