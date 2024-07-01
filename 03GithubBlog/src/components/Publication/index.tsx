/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubIssuesContext } from "../../contexts/GithubIssuesContext";

import { Card, CardContent, CardHeader, CardsGrid, PublicationContainer, PublicationForm, PublicationsHeader } from "./styles"
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { relativeDateFormatter } from "../../utils/formatter";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const Publications = () => {
  const { issues, getIssues } = useContext(GithubIssuesContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = async (data: SearchFormInputs) => {
    await getIssues(data.query)
  }

  return(
    <PublicationContainer>
      <PublicationsHeader>
        <h3>Publicações</h3>
        {issues.length === 1 ? (
          <span>{issues.length}&nbsp; publicação</span>
        ) : (
          <span>{issues.length}&nbsp; publicações</span>
        )}
      </PublicationsHeader>
      
      <PublicationForm onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </PublicationForm>

      <CardsGrid>
        {issues.map(item => {
          const formattedDate = relativeDateFormatter(item.created_at)

          return(
            <Link to={`/post/${item.id}`} key={item.id}>
              <Card>
                <CardHeader>
                  <h3>{item.title}</h3>
                  <time
                    title={formattedDate}
                  >
                    {formattedDate}
                  </time>
                </CardHeader>
                <CardContent>
                  {item.body}
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </CardsGrid>      
    </PublicationContainer>
  )
}