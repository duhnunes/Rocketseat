import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";


export interface Issues{
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
  getIssues: (query: string) => Promise<void>

  // fetchIssues: (query?: string) => Promise<void>
}

interface GithubIssuesProviderProps{
  children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const GithubIssuesContext = createContext({} as GithubIssuesContextType)

export function GithubIssuesProvider({ children }: GithubIssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  const getIssues = useCallback(async (query: string = '') => {
    try{
      const res = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)

      setIssues(res.data.items);
    } catch(error) {
      console.log('Error de retorno de GithubIssuesAPI ' + error)
    }
  }, [])

  

  // TENTANDO FAZER SOZINHO E TENDO ERRORS
  // async function fetchIssues(query?: string) {
  //   try {
  //     const url = new URL('https://api.github.com/repos/duhnunes/Rocketseat/issues?labels=blog')

  //     if(query){
  //       url.searchParams.append('q', query)
  //     }
      
  //     const response = await fetch(url)
  //     const data = await response.json()

  //     setIssues(data)
  //   } catch (error) {
  //     console.log('Error de retorno da API');
  //   }
  // }
  
  useEffect(() => {
    getIssues();

    // fetchIssues()
  },[getIssues])
  
  if(!issues){
    return <p>Carregando informações...</p>
  }

  return(
    <GithubIssuesContext.Provider 
      value={{
        issues,
        getIssues,
        
        // fetchIssues,
      }}
    >
      {children}
    </GithubIssuesContext.Provider>
  )
}