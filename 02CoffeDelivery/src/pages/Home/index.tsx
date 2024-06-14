import { ShoppingCartSimple, Trash } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

export function Home() {
  return(
    <>
      <h1>Hello Home</h1>
      <Button>Label</Button>
      <Button variant="secondary"><Trash size={16} />secondary</Button>
      <Button variant='icon'><ShoppingCartSimple size={16} /></Button>
    </>
  )
}