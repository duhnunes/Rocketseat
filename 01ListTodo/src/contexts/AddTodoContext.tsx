import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface CreateAddTodoData {
  id: string
  task: string
  isChecked?: boolean
  isEditing?: boolean
}

interface AddTodoContextType {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  listTodo: CreateAddTodoData[]
  setListTodo: Dispatch<SetStateAction<CreateAddTodoData[]>>
  handleAddTask: () => void
  handleDeleteTask: (id: string) => void
  handleTaskToggle: (id: string, checked: boolean | string) => void
  handleEditTask: (id: string) => void
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
      id: uuidv4(),
      task: inputValue,
      isChecked: false,
      isEditing: false,
    }

    setListTodo((state) => [newTask, ...state])
    setInputValue('')
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = listTodo.filter((item) => item.id !== id)

    setListTodo(filteredTasks)
  }

  function handleTaskToggle(id: string, checked: boolean | string) {
    const value = checked === true || checked === 'true'

    const updateCheckboxTask = listTodo.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return task
    })

    setListTodo(updateCheckboxTask)
  }

  function handleEditTask(id: string) {
    const editTask = listTodo.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item,
    )

    setListTodo(editTask)
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
        handleEditTask,
        setListTodo,
      }}
    >
      {children}
    </AddTodoContext.Provider>
  )
}
