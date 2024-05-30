import { Trash } from "@phosphor-icons/react"
import { TaskItemContainer } from "./styles"
import { Button } from "../Button"
import { Checkbox } from "../Input/styles"
import { useState } from "react"

const itemTask = [
  {
    id:1,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id:2,
    content: 'Info legal',
  }
]

export const TaskItem = () => {
  const [listItems, setListItems] = useState([]);
  return(
    <>
      {
        itemTask.map((item) => {
          return(
            <TaskItemContainer key={item.id}>
              <Checkbox type="checkbox" />
              <p>{item.content}</p>
              <Button variant="ghost">
                <Trash size={24} />
              </Button>
            </TaskItemContainer>
          )
        })
      }
    </>
  )
}
