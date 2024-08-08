import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { AddTodoContext } from '@/contexts/ListTodoContext'

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

const listTodoValidationSchema = z.object({
  id: z.string(),
  task: z.string().min(3, {
    message: 'Informe um mínimo de 3 caracteres',
  }),
  isChecked: z.boolean(),
  isEditing: z.boolean(),
})
type ListTodoFormData = z.infer<typeof listTodoValidationSchema>

export function CreateTask() {
  const { inputValue, setInputValue, createNewTask } =
    useContext(AddTodoContext)

  const newAddTodo = useForm<ListTodoFormData>({
    resolver: zodResolver(listTodoValidationSchema),
    defaultValues: {
      task: '',
      id: '',
      isChecked: false,
      isEditing: false,
    },
  })

  const { register, handleSubmit, reset, control } = newAddTodo
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function handleAddTask(data: ListTodoFormData) {
    createNewTask(data)
    reset()
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="mx-auto max-w-[736px] -translate-y-1/2 justify-between hover:text-gray-200"
          variant="input"
          onClick={() => setIsDialogOpen(true)}
        >
          <p className="italic text-gray-300 font-normal">
            Adicione uma nova tarefa
          </p>
          <div className="flex items-center gap-2">
            Criar
            <PlusCircle className="size-4" />
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form
          onSubmit={handleSubmit(handleAddTask)}
          className="mx-auto flex flex-col gap-4 w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-gray-100">Criar Tarefa</DialogTitle>
            <DialogDescription>
              Adicione uma nova tarefa à sua lista utilizando{' '}
              <strong className="text-gray-100 underline">markdown</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 rounded-lg bg-gray-500 text-gray-100 text-sm transition-all duration-150 ring-offset-background placeholder:text-gray-300 outline-none placeholder:select-none focus:border-purple-dark focus:ring-2  focus:ring-purple-dark  group">
            <Controller
              name="task"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Adicione uma nova tarefa"
                  value={inputValue}
                  className="group-focus-within:outline-none group-focus-within:border-purple-dark group-focus-within:ring-2 group-focus-within:ring-purple-dark"
                  {...register('task', {
                    onChange: (e) => setInputValue(e.target.value),
                  })}
                />
              )}
            />
          </div>
          <DialogFooter className="gap-5">
            <Button
              variant="success"
              type="submit"
              size="lg"
              className="flex-1"
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
