import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardsGrid, PublicationContainer, PublicationsHeader } from "./styles"

export const Publications = () => {
  const cards = [1,2,3,4];
  return(
    <PublicationContainer>
      <PublicationsHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </PublicationsHeader>
      <input type="text" placeholder="Buscar conteúdo" />

      <CardsGrid>
        {cards.map(item => {
          return(
            <Link to="/post" key={item}>
              <Card>
                <CardHeader>
                  <h3>JavaScript data types and data structures</h3>
                  <span>Há 1 dia</span>
                </CardHeader>
                <CardContent>
                  <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                  </p>

                  <p>
              Dynamic typing
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                  </p>

                  <p>
              let foo = 42; // foo is now a number
              foo = 'bar'; // foo is now a string
              foo = true; // foo is now a boolean
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </CardsGrid>      
    </PublicationContainer>
  )
}