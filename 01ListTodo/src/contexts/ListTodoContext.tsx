import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

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
  handleDeleteTask: (id: string) => void
  handleTaskToggle: (id: string, checked: boolean | string) => void
  handleEditTask: (id: string) => void
}

interface ListTodoContextProps {
  children: ReactNode
}

export const AddTodoContext = createContext({} as AddTodoContextType)

export function AddTodoProvider({ children }: ListTodoContextProps) {
  const [listTodo, setListTodo] = useState<CreateAddTodoData[]>([])
  const [inputValue, setInputValue] = useState('')

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
