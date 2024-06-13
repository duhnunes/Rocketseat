/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from "@phosphor-icons/react"
import { AddTodoContainer } from "./styles"

import { Button } from "../Button"
import { Input } from "../Input"

// interface AddTodoProps {
//   newItemTask: () => void
// }

export const AddTodo = ({ newItemTask, listItemTask }: any) => {
  const [newItemTaskText, setNewItemTaskText] = useState('');

  const handleCreateNewItem = (event: any) => {
    event.preventDefault();
    // const newItemTaskText = event.target.addTodo.value PADRÂO JS
    
    const newTaskText = { 
      id: uuidv4(),
      content: [
        { type: 'paragraph', text: newItemTaskText },
      ],
      isChecked: false
    };

    newItemTask([...listItemTask, newTaskText])
    setNewItemTaskText('');

    console.log(`Add Item: ${newItemTaskText}`);
  }

  const handleNewItemTaskChange = (event: any) => {
    setNewItemTaskText(event?.target.value)
  }

  return(
    <AddTodoContainer onSubmit={handleCreateNewItem}>
      <Input
        name="addTodo"
        id="addTodo"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewItemTaskChange}
        value={newItemTaskText}
      />
      <Button type="submit" variant="primary">
        Criar
        <PlusCircle size={16} />
      </Button>
    </AddTodoContainer>
  )
}