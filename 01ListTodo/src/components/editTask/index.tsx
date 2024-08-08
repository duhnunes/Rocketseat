/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pencil } from 'lucide-react'
import { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { AddTodoContext, CreateAddTodoData } from '@/contexts/ListTodoContext'

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

export function EditTask({ id, task }: CreateAddTodoData) {
  const { handleEditTask, inputValue, setInputValue } =
    useContext(AddTodoContext)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSave = () => {
    if (!inputValue) {
      return
    }

    handleEditTask(id)
    setIsDialogOpen(false)
  }

  const { register, control } = useForm()

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

      <DialogContent className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-gray-100">Editar tarefa</DialogTitle>
          <DialogDescription>
            Faça alterações na sua task aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1">
          <div className="size-full rounded-lg bg-gray-500 text-gray-100 text-sm transition-all duration-150 ring-offset-background placeholder:text-gray-300 outline-none placeholder:select-none focus:border-purple-dark focus:ring-2 focus:ring-purple-dark group">
            <Controller
              name="editTask"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Adicione uma nova tarefa"
                  className="group-focus-within:outline-none group-focus-within:border-purple-dark group-focus-within:ring-2 group-focus-within:ring-purple-dark"
                  value={task}
                  {...register('task', {
                    onChange: (e) => setInputValue(e.target.value),
                  })}
                />
              )}
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
