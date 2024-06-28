import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import { ProfileContainer, ProfileContent, ProfileIcons, ProfileSocialLinks, ProfileTitle } from "./styles"

import { Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

interface Profile {
  id: number
  login: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  bio: string
  followers: number
}

export const Profile = () => {
  const [profile, setProfile] = useState<Profile | null>(null)
  
  async function loadProfile() {
    const response = await fetch('https://api.github.com/users/duhnunes');
    const data = await response.json();
    
    setProfile(data)
  }
  
  useEffect(() => {
    loadProfile();
  }, [])

  if(!profile){
    return <p>Carregando...</p>
  }

  
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
          <ProfileIcons>
            <Building size={18} weight="fill" />
            <span>{profile?.company === null ? 'Ainda sem Compania' : profile?.company}</span>
          </ProfileIcons>
          <ProfileIcons>
            <Users size={18} weight="fill" />
            <span>{profile?.followers} seguidores</span>
          </ProfileIcons>

        </ProfileSocialLinks>
      </ProfileContent>
    </ProfileContainer>
  )
}