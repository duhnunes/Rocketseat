import { CardRoot } from "./CardRoot"
import { CardImage } from "./CardImage"


import { CardFooter } from "./CardFooter"
import { CardPrice } from "./CardPrice"
import { CardCartInfo } from "./Cart/CardCartInfo"
import { CardDescription } from "./Shopping/CardDescription"
import { CardBadge } from "./Shopping/CardBadge"
import { CardActions } from "./Shopping/CardActions"


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
