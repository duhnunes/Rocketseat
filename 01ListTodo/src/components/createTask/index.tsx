import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as z from 'zod'

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

const listTodoValidationSchema = z.object({
  id: z.number(),
  task: z.string().min(3, {
    message: 'Informe um mínimo de 3 caracteres',
  }),
  isChecked: z.boolean(),
})
type ListTodoFormData = z.infer<typeof listTodoValidationSchema>

export function CreateTask() {
  const { inputValue, setInputValue, setListTodo } = useContext(AddTodoContext)

  const newAddTodo = useForm<ListTodoFormData>({
    resolver: zodResolver(listTodoValidationSchema),
    defaultValues: {
      task: '',
      id: new Date().getTime(),
      isChecked: false,
    },
  })

  const { register, handleSubmit, reset } = newAddTodo
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: CreateAddTodoData = {
      id: uuidv4(),
      task: inputValue,
      isChecked: false,
      isEditing: false,
    }

    setListTodo((state) => [newTask, ...state])
    reset()
  }

  function stopCloseDialog() {
    if (!inputValue) {
      return
    }

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
          className="mx-auto flex flex-col gap-2 w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-gray-100">Criar Tarefa</DialogTitle>
            <DialogDescription>
              Adicione uma nova tarefa à sua lista
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col min-h-60 w-full rounded-lg shadow-code bg-gray-500  text-gray-100 text-sm transition-all duration-150 ring-offset-background placeholder:text-gray-300 outline-none focus:border-purple-dark focus:ring-2 placeholder:select-none focus:ring-purple-dark group">
            <Textarea
              placeholder="Adicione uma nova tarefa"
              value={inputValue}
              {...register('task', {
                onChange: (e) => setInputValue(e.target.value),
              })}
              className="group-focus-within:outline-none group-focus-within:border-purple-dark group-focus-within:ring-2 group-focus-within:ring-purple-dark"
            />
          </div>
          <DialogFooter className="gap-5">
            <Button
              variant="success"
              type="submit"
              size="lg"
              className="flex-1"
              onClick={stopCloseDialog}
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
