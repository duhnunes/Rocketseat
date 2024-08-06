import { Pencil } from 'lucide-react'
import { useContext, useState } from 'react'

import { AddTodoContext, CreateAddTodoData } from '@/contexts/AddTodoContext'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Textarea } from '../ui/textarea'

interface EditTaskProps extends CreateAddTodoData {}

export function EditTask({ task, id }: EditTaskProps) {
  const { setListTodo } = useContext(AddTodoContext)
  const [editedTask, setEditedTask] = useState(task)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSave = () => {
    setListTodo((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, task: editedTask, isEditing: false } : item,
      ),
    )
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Editar tarefa"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-gray-100">Editar tarefa</DialogTitle>
          <DialogDescription>
            Faça alterações na sua task aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="flex flex-col min-h-60 w-full rounded-lg shadow-code bg-gray-500  text-gray-100 text-sm transition-all duration-150 ring-offset-background placeholder:text-gray-300 outline-none focus:border-purple-dark focus:ring-2 placeholder:select-none focus:ring-purple-dark group">
            <Textarea
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="group-focus-within:outline-none group-focus-within:border-purple-dark group-focus-within:ring-2 group-focus-within:ring-purple-dark"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="success" type="submit" onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
