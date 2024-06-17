import infoImgCafe from '/assets/Imagem.png';

import {
  InfoItems,
  ItemsContainer,
  Title,
  IntroContainer,
  IntroInformationContainer
} from "./styles";

import { Navbar } from "../../Layouts/Navbar";
import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react';

export function Home() {
  return(
    <>
      <Navbar />

      <IntroContainer>
        <IntroInformationContainer>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Title>

          <ItemsContainer>
            <InfoItems variant='yellow-dark'>
              <ShoppingCartSimple weight='fill' />
              Compra simples e segura
            </InfoItems>
            <InfoItems variant='gray'>
              <Package weight='fill' />
              Embalagem mantém o café intacto
            </InfoItems>
            <InfoItems variant='yellow'>
              <Timer weight='fill' />
              Entrega rápida e rastreada
            </InfoItems>
            <InfoItems variant='purple'>
              <Coffee weight='fill' />
              O café chega fresquinho até você
            </InfoItems>
          </ItemsContainer>
        </IntroInformationContainer>

        <img src={infoImgCafe} alt="" />
      </IntroContainer>
    </>
  )
}
