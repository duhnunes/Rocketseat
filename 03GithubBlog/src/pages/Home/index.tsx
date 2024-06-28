import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publication";
import { HomeContainer } from "./styles";

import headerImg from '/assets/img/header.svg'

export function Home() {
  return(
    <>
      <img src={headerImg} alt="" width="100%" />

      <HomeContainer>
        <Profile />
        <Publications />
      </HomeContainer>
    </>
  )
}