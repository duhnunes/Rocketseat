import { FilterContainer, TitleMainHeaderContainer } from "./styles"

export const NavMain = () => {
  return(
    <TitleMainHeaderContainer>
      <h2>Nossos cafés</h2>

      <FilterContainer variant='outline'>
        <span>Tradicional</span>
        <span>Especial</span>
        <span>Com leite</span>
        <span>Alcoólico</span>
        <span>Gelado</span>
      </FilterContainer>
    </TitleMainHeaderContainer>
  )
}
