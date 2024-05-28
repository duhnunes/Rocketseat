import { useState } from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TaskItem } from './components/TaskItem'

import { BaseBgTaskCounter, BorderTop, ContentContainer, HeaderContainer, MainContainer, NoTasksContainer, TaskTextCreated, TaskTextFinished } from "./styles";

import clipboard from '/public/clipboard.svg'

import { Button } from "./components/Button";

export function Home() {
  const [hasTask, setHasTask] = useState(false)
  return(
    <>
      
      <Header />
      <AddTodo />
      <MainContainer>
        <Button variant="test" onClick={() => setHasTask((prev) => !prev)}>
          Test conditional render list
        </Button>
        <HeaderContainer>
          <TaskTextCreated>
            Tarefas criadas
            <BaseBgTaskCounter>0</BaseBgTaskCounter>
          </TaskTextCreated>
      
          <TaskTextFinished>
            Concluídas
            <BaseBgTaskCounter>0</BaseBgTaskCounter>
          </TaskTextFinished>
        </HeaderContainer>

        <ContentContainer>
          { !hasTask ? (
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
            <>
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </>
          )}
        </ContentContainer>
      </MainContainer>
    </>
  )
}