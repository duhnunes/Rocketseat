import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

export interface CreateAddTodoData {
  id: number
  task: string
  isChecked: boolean
}

interface AddTodoContextType {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  listTodo: CreateAddTodoData[]
  handleAddTask: () => void
  handleDeleteTask: (id: number) => void
  handleTaskToggle: ({ id, value }: { id: number; value: boolean }) => void
}

interface AddTodoProviderProps {
  children: ReactNode
}

export const AddTodoContext = createContext({} as AddTodoContextType)

export function AddTodoProvider({ children }: AddTodoProviderProps) {
  const [listTodo, setListTodo] = useState<CreateAddTodoData[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: CreateAddTodoData = {
      id: new Date().getTime(),
      task: inputValue,
      isChecked: false,
    }

    setListTodo((state) => [newTask, ...state])
    setInputValue('')
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = listTodo.filter((item) => item.id !== id)

    setListTodo(filteredTasks)
  }

  function handleTaskToggle({ id, value }: { id: number; value: boolean }) {
    const updateTasks = listTodo.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setListTodo(updateTasks)
  }

  return (
    <AddTodoContext.Provider
      value={{
        inputValue,
        setInputValue,
        listTodo,
        handleAddTask,
        handleDeleteTask,
        handleTaskToggle,
      }}
    >
      {children}
    </AddTodoContext.Provider>
  )
}
