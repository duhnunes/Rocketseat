import { ReactNode, createContext, useEffect, useState } from "react";

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

export const GithubUserContext = createContext({} as GithubUserContextType)

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [profile, setProfile] = useState<ProfileUser | null>(null)
  
  async function loadProfile() {
    const response = await fetch('https://api.github.com/users/duhnunes');
    const data = await response.json();
    
    setProfile(data)
  }
  
  useEffect(() => {
    loadProfile();
  }, [])

  if(!profile){
    return <p>Carregando informações...</p>
  }

  return(
    <GithubUserContext.Provider value={{ profile }}>
      {children}
    </GithubUserContext.Provider>
  )
}