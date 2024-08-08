/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface CreateAddTodoData {
  id: string
  task: string
  isChecked?: boolean
  isEditing?: boolean
}

interface ListTodoContextType {
  listTodo: CreateAddTodoData[]
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  createNewTask: (data: CreateAddTodoData) => void
  handleDeleteTask: (id: string) => void
  handleTaskToggle: (id: string, checked: boolean | string) => void
  handleEditTask: (id: string) => void
}

interface ListTodoContextProps {
  children: ReactNode
}

export const AddTodoContext = createContext({} as ListTodoContextType)

export function AddTodoProvider({ children }: ListTodoContextProps) {
  const [inputValue, setInputValue] = useState('')
  const [listTodo, dispatch] = useReducer(
    (state: CreateAddTodoData[], action: any) => {
      switch (action.type) {
        case 'ADD_TASK':
          return [action.payload, ...state]

        case 'DELETE_TASK':
          return state.filter((item) => item.id !== action.payload.id)

        case 'UPDATE_CHECKBOX_TASK':
          return action.payload.updateCheckboxTask

        case 'EDIT_TASK':
          return action.payload.updatedList

        default:
          return state
      }
    },
    [],
  )

  function createNewTask(data: CreateAddTodoData) {
    if (!inputValue) {
      return
    }

    const id = uuidv4()
    const newTask: CreateAddTodoData = {
      id,
      task: data.task,
      isChecked: data.isChecked,
      isEditing: data.isEditing,
    }

    dispatch({
      type: 'ADD_TASK',
      payload: newTask,
    })
  }

  function handleDeleteTask(id: string) {
    dispatch({
      type: 'DELETE_TASK',
      payload: {
        id,
      },
    })
  }

  function handleTaskToggle(id: string, checked: boolean | string) {
    const value = checked === true || checked === 'true'
    const updateCheckboxTask = listTodo.map((task: any) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return task
    })

    dispatch({
      type: 'UPDATE_CHECKBOX_TASK',
      payload: {
        updateCheckboxTask,
      },
    })
  }

  function handleEditTask(id: string) {
    const updatedList = listTodo.map((item: any) =>
      item.id === id
        ? { ...item, task: inputValue, isEditing: !item.isEditing }
        : item,
    )

    dispatch({
      type: 'EDIT_TASK',
      payload: {
        updatedList,
      },
    })
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
        createNewTask,
      }}
    >
      {children}
    </AddTodoContext.Provider>
  )
}
