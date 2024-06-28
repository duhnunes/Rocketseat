import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import { ProfileContainer, ProfileContent, ProfileIcons, ProfileSocialLinks, ProfileTitle } from "./styles"

import avatar from '/assets/img/avatar.svg'
import { Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export const Profile = () => {
  return(
    <ProfileContainer>
      <img src={avatar} alt="" />

      <ProfileContent>
        <ProfileTitle>
          <h2>Cameron Williamson</h2>

          <Link to="/" target="_blank" rel="noopener noreferrer">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileTitle>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <ProfileSocialLinks>
          
          <ProfileIcons>
            <GithubLogo size={18} weight="fill" />
            <span>cameronwll</span>
          </ProfileIcons>
          <ProfileIcons>
            <Building size={18} weight="fill" />
            <span>Rocketseat</span>
          </ProfileIcons>
          <ProfileIcons>
            <Users size={18} weight="fill" />
            <span>32 seguidores</span>
          </ProfileIcons>

        </ProfileSocialLinks>
      </ProfileContent>
    </ProfileContainer>
  )
}