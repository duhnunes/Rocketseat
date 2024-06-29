import { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubIssuesContext } from "../../contexts/GithubIssuesContext";

// import { format, formatDistanceToNow } from "date-fns";
// import { ptBR } from "date-fns/locale";

import { Card, CardContent, CardHeader, CardsGrid, PublicationContainer, PublicationsHeader } from "./styles"

export const Publications = () => {
  const { issues } = useContext(GithubIssuesContext)

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
      <input type="text" placeholder="Buscar conteúdo" />

      <CardsGrid>
        {issues.map(item => {
          // const createdAt = item.created_at;

          // const publishedDateFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
          //   locale: ptBR,
          // })

          // const publishedDateRelativeToNow = formatDistanceToNow(
          //   createdAt, {
          //     locale: ptBR,
          //     addSuffix: true,
          //   }
          // )

          return(
            <Link to="/post" key={item.id}>
              <Card>
                <CardHeader>
                  <h3>{item.title}</h3>
                  <time
                    // title={publishedDateFormatted}
                  >
                    {item.created_at}
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