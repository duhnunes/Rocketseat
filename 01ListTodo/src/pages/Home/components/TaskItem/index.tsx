/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash } from "@phosphor-icons/react"
import { TaskItemContainer } from "./styles"

import { Button } from "../Button"
import { Checkbox } from "../Input/styles"

// interface TaskItemProps {
//   content: string
// }

export const TaskItem = ({ content }: any) => {
  return(
    <TaskItemContainer key={content.id}>
      <Checkbox type="checkbox" />
      {content.map((line: any) => {
        if(line.type === 'paragraph'){
          return <p>{line.text}</p>
        }
      })}
      <Button variant="ghost">
        <Trash size={24} />
      </Button>
    </TaskItemContainer>
  )
}
