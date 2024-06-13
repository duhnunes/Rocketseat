/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TaskItem } from './components/TaskItem'

import {
  BaseBgTaskCounter,
  BorderTop,
  ContentContainer,
  HeaderContainer,
  MainContainer,
  NoTasksContainer,
  TaskTextCreated,
  TaskTextFinished
} from "./styles";

import clipboard from '/clipboard.svg'

export interface Line {
  type: string
  text: string
}
export interface ItemTaskProps {
  id: string
  content: Line[]
}

// const itemTask = [
//   {
//     id:1,
//     content: [
//       { type: 'paragraph', text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' }
//     ]
//   },
//   {
//     id:2,
//     content: [
//       { type: 'paragraph', text: 'Info legal' }
//     ]
//   },
// ]

export function Home() {
  const [itemTask, setItemTask] = useState<ItemTaskProps[]>([])

  const deleteTaskItem = (itemTaskDelete: ItemTaskProps) => {
    const itemTaskWithoutDeletedOne = itemTask.filter(item => {
      return item.id !== itemTaskDelete.id
      })

    setItemTask(itemTaskWithoutDeletedOne)
    console.log(`Deleted item: ${itemTaskDelete.id}\nContent: ${JSON.stringify(itemTaskDelete.content)}`)
  }

  return(
    <>
      <Header />
      <AddTodo newItemTask={setItemTask} listItemTask={itemTask} />
      <MainContainer>
        <HeaderContainer>
          <TaskTextCreated>
            Tarefas criadas
            <BaseBgTaskCounter>
              { itemTask.length }
            </BaseBgTaskCounter>
          </TaskTextCreated>
      
          <TaskTextFinished>
            Concluídas
            <BaseBgTaskCounter>
              {
               `${itemTask.length} de ${itemTask.length}` 
              }
            </BaseBgTaskCounter>
          </TaskTextFinished>
        </HeaderContainer>

        <ContentContainer>
          { itemTask.length === 0 ? (
            <>
              <BorderTop />
              <NoTasksContainer>
                <img
                  src={clipboard}
                  alt=""
                />
                <div>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus items a fazer</p>
                </div>
              </NoTasksContainer>
            </>
          ) : (
            itemTask.map((item) => {
              return(
                <TaskItem
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  onDeleteTaskItem={deleteTaskItem}
                />
              )
            })
          )}
        </ContentContainer>
      </MainContainer>
    </>
  )
}
