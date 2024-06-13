/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash } from "@phosphor-icons/react"
import { TaskItemContainer } from "./styles"

import { Button } from "../Button"
import { Checkbox } from "../Input/styles"
import { useState } from "react"
import { ItemTaskProps } from "../.."

interface TaskItemProps extends ItemTaskProps{
  onDeleteTaskItem: (itemTaskDelete: ItemTaskProps) => void
}

export const TaskItem = ({ content, onDeleteTaskItem, id }: TaskItemProps) => {
  const [isCheckedOpaqueParent, setIsCheckedOpaqueParent] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsCheckedOpaqueParent(event.target.checked);
  }

  const handleDeleteItemTask = () => {
    onDeleteTaskItem({id, content})
  }
  
  return(
    <TaskItemContainer
      className={!isCheckedOpaqueParent ? '' : 'disabled'}
    >
      <Checkbox
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      { content &&
        content.map((line: any) => {
          if(line.type === 'paragraph'){
            return <p key={id}>{line.text}</p>
          }
        })
      }
      <Button
        variant="ghost"
        title="Deletar Task"
        onClick={handleDeleteItemTask}
      >
        <Trash size={24} />
      </Button>
    </TaskItemContainer>
  )
}
