import { Link } from "react-router-dom"
import { GithubUserContext } from "../../contexts/GitHubUserContex"
import { useContext } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { Building, GithubLogo, Users } from "@phosphor-icons/react"

import { ProfileContainer, ProfileContent, ProfileIcons, ProfileSocialLinks, ProfileTitle } from "./styles"

export const Profile = () => {
  const { profile } = useContext(GithubUserContext)

  return(
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />

      <ProfileContent>
        <ProfileTitle>
          <h2>{profile?.name}</h2>

          <Link to={profile?.html_url} target="_blank" rel="noopener noreferrer">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileTitle>

        <p>{profile?.bio}</p>

        <ProfileSocialLinks>
          
          <ProfileIcons>
            <GithubLogo size={18} weight="fill" />
            <span>{profile?.login}</span>
          </ProfileIcons>
          {profile?.company && 
          <ProfileIcons>
            <Building size={18} weight="fill" />
            <span>{profile?.company}</span>
          </ProfileIcons>
          }
          <ProfileIcons>
            <Users size={18} weight="fill" />
            <span>{profile?.followers} seguidores</span>
          </ProfileIcons>

        </ProfileSocialLinks>
      </ProfileContent>
    </ProfileContainer>
  )
}