import { useContext } from 'react'

import {
  AddTodoContext,
  CreateAddTodoData,
} from '../../contexts/AddTodoContext'
import { DeleteTask } from '../deleteTask'
import { EditTask } from '../editTask'
import { Markdown } from '../markdown/markdown'
import { Checkbox } from '../ui/checkbox'

interface TaskComponentProps extends CreateAddTodoData {}

export const TaskComponent = ({ id, task, isChecked }: TaskComponentProps) => {
  const { handleTaskToggle } = useContext(AddTodoContext)

  const checkboxCheckedClassName = isChecked ? 'checkboxCheckedCss' : ''

  return (
    <article
      className="shadow-shape space-y-2 cursor-default items-start  rounded-lg bg-gray-500 p-4 transition-all hover:brightness-110 outline-none focus:border-purple-dark focus:ring-2 focus:ring-purple-dark"
      tabIndex={0}
      aria-label="Item da Tarefa"
    >
      <div className="flex items-center justify-between w-full">
        <Checkbox
          data-id={id}
          checked={isChecked}
          onCheckedChange={(checked) => handleTaskToggle(id, checked)}
          role="checkbox"
          aria-label={isChecked ? 'Desmarcar tarefa.' : 'Marcar tarefa.'}
        />
        <div className="flex items-center gap-2">
          <EditTask task={task} id={id} />
          <DeleteTask task={task} id={id} />
        </div>
      </div>
      <div
        className={`flex-1 text-sm text-gray-100 outline-none focus:border-purple-dark focus:ring-2 placeholder:select-none focus:ring-purple-dark transition-all duration-150 rounded-md ${checkboxCheckedClassName}`}
      >
        <Markdown task={task} id={id} />
      </div>
    </article>
  )
}
