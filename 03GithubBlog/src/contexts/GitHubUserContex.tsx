import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileUser {
  id: number
  login: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  bio: string
  followers: number
}

interface GithubUserContextType{
  profile: ProfileUser
}

interface GithubUserProviderProps {
  children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export const GithubUserContext = createContext({} as GithubUserContextType)

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [profile, setProfile] = useState<ProfileUser>({} as ProfileUser)
  
  const getUser = useCallback(async () => {
    try{
      const res = await api.get(`/users/${username}`);
    
      setProfile(res.data)
    } catch(error){
      console.log('Error de retorno de GithubUserAPI ' + error);
    }
  }, [])
  
  // async function loadProfile() {
  //   const response = await fetch('https://api.github.com/users/duhnunes');
  //   const data = await response.json();
    
  //   setProfile(data)
  // }
  
  useEffect(() => {
    getUser();
    // loadProfile();
  }, [getUser])

  if(!profile){
    return <p>Carregando informações...</p>
  }

  return(
    <GithubUserContext.Provider value={{ profile }}>
      {children}
    </GithubUserContext.Provider>
  )
}