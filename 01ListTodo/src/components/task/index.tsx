import { useContext } from 'react'

import {
  AddTodoContext,
  CreateAddTodoData,
} from '../../contexts/AddTodoContext'
import { DeleteTask } from '../deleteTask'
import { EditTask } from '../editTask'
import { Checkbox } from '../ui/checkbox'

interface TaskComponentProps extends CreateAddTodoData {}

export const TaskComponent = ({ id, task, isChecked }: TaskComponentProps) => {
  const { handleTaskToggle } = useContext(AddTodoContext)

  const checkboxCheckedClassName = isChecked ? 'text-gray-300 line-through' : ''

  return (
    <article
      className="shadow-shape flex cursor-default items-start gap-3 rounded-lg bg-gray-500 p-4 transition-all hover:brightness-110"
      tabIndex={0}
      aria-label="Tarefa"
    >
      <Checkbox
        data-id={id}
        checked={isChecked}
        onCheckedChange={(checked) => handleTaskToggle(id, checked)}
        role="checkbox"
        aria-label={isChecked ? 'Desmarcar tarefa.' : 'Marcar tarefa.'}
      />
      <p
        className={`${checkboxCheckedClassName} flex-1 text-sm text-gray-100`}
        tabIndex={0}
      >
        {task}
      </p>
      <div className="flex items-center gap-2">
        <EditTask task={task} id={id} />
        <DeleteTask task={task} id={id} />
      </div>
    </article>
  )
}
