/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusCircle } from "@phosphor-icons/react"
import { AddTodoContainer } from "./styles"
import { useState } from "react"

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
    console.log('Add Item to Task: ' + newItemTaskText);

    const newTaskText = { 
      id: (listItemTask.length + 1).toString(),
      content: [
        { type: 'paragraph', text: newItemTaskText },
      ],
    };

    newItemTask([...listItemTask, newTaskText])

    setNewItemTaskText('');
  }

  const handleNewItemTaskChange = (event: any) => {
    setNewItemTaskText(event?.target.value)
  }

  return(
    <AddTodoContainer onSubmit={handleCreateNewItem} className="test">
      <Input
        type="text"
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