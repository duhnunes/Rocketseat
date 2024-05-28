import { PlusCircle } from "@phosphor-icons/react"
import { Button } from "../Button"
import { Input } from "../Input"
import { AddTodoContainer } from "./styles"

export const AddTodo = () => {
  return(
    <AddTodoContainer>
      <Input />
      <Button variant="primary">
        Criar
        <PlusCircle size={16} />
      </Button>
    </AddTodoContainer>
  )
}