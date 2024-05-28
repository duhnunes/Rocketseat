import { Trash } from "@phosphor-icons/react"
import { TaskItemContainer } from "./styles"
import { Button } from "../Button"
import { Checkbox } from "../Input/styles"

export const TaskItem = () => {
  return(
    <TaskItemContainer>
      <Checkbox type="checkbox" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Button variant="ghost">
        <Trash size={24} />
      </Button>
    </TaskItemContainer>
  )
}
