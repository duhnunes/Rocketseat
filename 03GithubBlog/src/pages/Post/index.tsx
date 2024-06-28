import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { PostContainer, PostContent, PostHeader, PostIcons, PostLinks, PostStatistics } from './styles'
import headerImg from '/assets/img/header.svg'
import { Link } from 'react-router-dom'
import { CalendarDots, CaretLeft, ChatCircle, GithubLogo } from '@phosphor-icons/react'

export function Post() {
  return(
    <>
      <img src={headerImg} alt="" width="100%" />

      <PostContainer>
        <PostHeader>
          <PostLinks>
            <Link to="/">
              <CaretLeft />
              <span>Voltar</span>
            </Link>
            <Link to="/" target='_blank'>
              <span>Ver no github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </PostLinks>

          <h1>JavaScript data types and data structures</h1>

          <PostStatistics>
            <PostIcons>
              <GithubLogo size={18} weight="fill" />
              <span>cameronwll</span>
            </PostIcons>

            <PostIcons>
              <CalendarDots size={18} weight="fill" />
              <span>Há 1 dia</span>
            </PostIcons>

            <PostIcons>
              <ChatCircle size={18} weight="fill" />
              <span>5 comentários</span>
            </PostIcons>
          </PostStatistics>
        </PostHeader>

        <PostContent>
          <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
          <br />
          <p>
            <span>Dynamic typing</span> <br />
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

          </p>
        </PostContent>
      </PostContainer>
    </>
  )
}