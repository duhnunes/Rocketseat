import { ReactNode, createContext, useCallback, useState } from "react";
import { api } from "../lib/axios";

interface GithubAccounts{

}

interface GithubContextType{
  GithubAccount: GithubAccounts[]
  fetchGithub: (query?: string) => Promise<void>
}

interface GithubContextProps{
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubContextProps) {
  const [accounts, setAccounts] = useState<GithubAccounts[]>([]);

  const fetchGithub = useCallback(
    async (query?: string) => {
      const reponse = await api.get()
    }
  )
}