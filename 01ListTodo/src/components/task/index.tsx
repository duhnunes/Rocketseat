import { Trash } from '@phosphor-icons/react'
import React, { useContext } from 'react'

import {
  AddTodoContext,
  CreateAddTodoData,
} from '../../contexts/AddTodoContext'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

interface TaskComponentProps extends CreateAddTodoData {
  onDelete: (id: number) => void
}

export const TaskComponent = ({
  id,
  task,
  isChecked,
  onDelete,
}: TaskComponentProps) => {
  const { handleTaskToggle } = useContext(AddTodoContext)

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.checked
    handleTaskToggle({ id, value })
  }

  const checkboxCheckedClassName = isChecked ? 'text-gray-300 line-through' : ''

  return (
    <article className="shadow-shape flex cursor-default items-start gap-3 rounded-lg bg-gray-500 p-4 transition-all hover:brightness-110">
      <Checkbox onChecked={isChecked} onChange={handleCheckboxClick} />
      <p className={`${checkboxCheckedClassName} flex-1 text-sm text-gray-100`}>
        {task}
      </p>
      <AlertDialog>
        <AlertDialogOverlay className="bg-black/10" />
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="ghost">
            <Trash className="size-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogContent className="shadow-shape flex flex-col gap-1 border-none bg-gray-600 text-gray-100">
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              A task será deletada permanentemente, essa ação não pode ser
              desfeita.
            </AlertDialogDescription>
            <p className="scrollbar shadow-code mb-4 max-h-60 overflow-auto rounded-md bg-zinc-900 p-2 focus:outline-none text-gray-300">
              {task}
            </p>
            <div className="flex justify-end gap-2">
              <AlertDialogCancel asChild>
                <Button variant="outline" size="confirm">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  variant="danger"
                  size="confirm"
                  onClick={() => onDelete(id)}
                >
                  Confirmar
                </Button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    </article>
  )
}
