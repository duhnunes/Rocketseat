import { useState } from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TaskItem } from './components/TaskItem'

import { BaseBgTaskCounter, BorderTop, ContentContainer, HeaderContainer, MainContainer, NoTasksContainer, TaskTextCreated, TaskTextFinished } from "./styles";

import clipboard from '/clipboard.svg'

interface Line {
  type: string
  text: string
}
interface ItemTaskProps {
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
            <BaseBgTaskCounter>0</BaseBgTaskCounter>
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
                  content={item.content}
                />
              )
            })
          )}
        </ContentContainer>
      </MainContainer>
    </>
  )
}
