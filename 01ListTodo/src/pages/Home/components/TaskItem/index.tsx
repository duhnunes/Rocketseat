/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash } from "@phosphor-icons/react"
import { TaskItemContainer } from "./styles"

import { Button } from "../Button"
import { Checkbox } from "../Input/styles"
import { useState } from "react"

// interface TaskItemProps {
//   content: string
// }

export const TaskItem = ({ content }: any) => {
  const [isCheckedOpaqueParent, SetIsCheckedOpaqueParent] = useState(false);

  const handleCheckboxChange = (event: any) => {
    SetIsCheckedOpaqueParent(event.target.checked);
  }
  return(
    <TaskItemContainer
      className={!isCheckedOpaqueParent ? '' : 'checked'}
    >
      <Checkbox type="checkbox" onChange={handleCheckboxChange} />
      { content &&
        content.map((line: any) => {
          if(line.type === 'paragraph'){
            return <p>{line.text}</p>
          }
        })
      }
      <Button variant="ghost">
        <Trash size={24} />
      </Button>
    </TaskItemContainer>
  )
}
