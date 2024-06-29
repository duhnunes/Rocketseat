import { ReactNode, createContext, useEffect, useState } from "react";

interface Issues{
  id: number
  title: string
  html_url: string
  body: string
  created_at: string
  user: {
    login: string
  }
  comments: number
  number: number
}

interface GithubIssuesContextType{
  issues: Issues[]
}

interface GithubIssuesProviderProps{
  children: ReactNode
}

export const GithubIssuesContext = createContext({} as GithubIssuesContextType)

export function GithubIssuesProvider({ children }: GithubIssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  async function fetchIssues() {
    try {
      const response = await fetch('https://api.github.com/repos/duhnunes/Rocketseat/issues?labels=blog')
      const data = await response.json()

      setIssues(data)
    } catch (error) {
      console.log('Error de retorno da API');
    }
  }
  
  useEffect(() => {
    fetchIssues()
  },[])
  
  if(!issues){
    return <p>Carregando informações...</p>
  }

  return(
    <GithubIssuesContext.Provider 
      value={{
        issues,
      }}
    >
      {children}
    </GithubIssuesContext.Provider>
  )
}