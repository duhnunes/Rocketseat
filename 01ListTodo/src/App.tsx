import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import clipboard from '../public/assets/clipboard.svg'
import logo from '../public/assets/logo.svg'
import { TaskComponent } from './components/task'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { AddTodoContext } from './contexts/AddTodoContext'

const listTodoValidationSchema = z.object({
  id: z.number(),
  task: z.string().min(3, {
    message: 'Informe um mínimo de 3 caracteres',
  }),
  isChecked: z.boolean(),
})
type ListTodoFormData = z.infer<typeof listTodoValidationSchema>

export function App() {
  const {
    inputValue,
    setInputValue,
    listTodo,
    handleAddTask,
    handleDeleteTask,
  } = useContext(AddTodoContext)

  const newAddTodo = useForm<ListTodoFormData>({
    resolver: zodResolver(listTodoValidationSchema),
    defaultValues: {
      task: '',
      id: new Date().getTime(),
      isChecked: false,
    },
  })

  const { register, handleSubmit } = newAddTodo

  const checkedTasksCounter = listTodo.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <div className="scrollbar min-h-screen w-full bg-gray-600 pb-10 text-gray-300 antialiased">
      <header className="flex h-[200px] w-full select-none items-center justify-center gap-3 bg-gray-700">
        <img className="h-9 w-[22px]" src={logo} alt="" />
        <div>
          <span className="text-4xl font-black text-blue-light">to</span>
          <span className="text-4xl font-black text-purple-dark">do</span>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="mx-auto flex max-w-[736px] -translate-y-[50%] items-center justify-center gap-2"
      >
        <Input
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          {...register('task', {
            onChange: (e) => setInputValue(e.target.value),
          })}
        />
        <Button type="submit">
          Criar
          <PlusCircle size={16} />
        </Button>
      </form>

      <section className="mx-auto flex max-w-[736px] flex-col gap-6">
        <article className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="cursor-default text-sm font-bold text-blue-light">
              Tarefas Criadas
            </span>
            <span className="shadow-shape select-none rounded-full bg-gray-400 px-2 py-1 text-xs font-bold text-gray-200">
              {listTodo ? listTodo.length : 0}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="cursor-default text-sm font-bold text-purple-light">
              Concluídas
            </span>
            <span className="shadow-shape select-none rounded-full bg-gray-400 px-2 py-1 text-xs font-bold text-gray-200">
              {checkedTasksCounter}
              &nbsp;de&nbsp;
              {listTodo?.length}
            </span>
          </div>
        </article>

        {listTodo?.length === 0 ? (
          <article className="flex flex-col items-center gap-4 px-6 py-16">
            <img src={clipboard} className="size-14" alt="" />

            <div className="flex w-full flex-col items-center">
              <p className="font-bold text-gray-300">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-gray-300">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </article>
        ) : (
          <>
            {listTodo?.map((item) => {
              return (
                <TaskComponent
                  key={item.id}
                  {...item}
                  onDelete={handleDeleteTask}
                />
              )
            })}
          </>
        )}
      </section>
    </div>
  )
}
