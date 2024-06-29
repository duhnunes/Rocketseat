import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

import { GithubIssuesContext } from '../../contexts/GithubIssuesContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { CalendarDots, CaretLeft, ChatCircle, GithubLogo } from '@phosphor-icons/react'
import headerImg from '/assets/img/header.svg'

import { PostContainer, PostContent, PostHeader, PostIcons, PostLinks, PostStatistics } from './styles'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { issues } = useContext(GithubIssuesContext)

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
            <Link to={issues[0]?.html_url} target='_blank'>
              <span>Ver no github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </PostLinks>

          <h1>{issues[0]?.title}</h1>

          <PostStatistics>
            <PostIcons>
              <GithubLogo size={18} weight="fill" />
              <span>{issues[0]?.user.login}</span>
            </PostIcons>

            <PostIcons>
              <CalendarDots size={18} weight="fill" />
              <time
                title={issues[0]?.created_at}
                dateTime={issues[0]?.created_at}
              >
                {issues[0]?.created_at}
              </time>
            </PostIcons>

            <PostIcons>
              <ChatCircle size={18} weight="fill" />
              {issues.length !== 1 ? (
                <span>{issues.map(item => item.comments)}&nbsp; comentário</span>
              ) : (
                <span>{issues.map(item => item.comments)}&nbsp; comentários</span>
              )}
            </PostIcons>
          </PostStatistics>
        </PostHeader>

        <PostContent>
          <Markdown remarkPlugins={[remarkGfm]}>
            {issues[0]?.body}
          </Markdown>
        </PostContent>
      </PostContainer>
    </>
  )
}