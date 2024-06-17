import infoImgCafe from '/assets/Imagem.png';

import {
  InfoItems,
  ItemsContainer,
  Title,
  IntroContainer,
  IntroInformationContainer,
  MainContainer,
  ListCoffeeContainer,
} from "./styles";

import { Navbar } from "../../Layouts/Navbar";
import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react';
import { NavMain } from './components/MainHeader';
import { Card } from './components/Card';

// Images
import tradicional from '/assets/coffee/Type=Expresso.png';
import americano from '/assets/coffee/Type=Americano.png';
import cremoso from '/assets/coffee/Type=Expresso Cremoso.png';
import gelado from '/assets/coffee/Type=Café Gelado.png';
import comLeite from '/assets/coffee/Type=Café com Leite.png';
import latte from '/assets/coffee/Type=Latte.png';
import capuccino from '/assets/coffee/Type=Capuccino.png';
import macchiato from '/assets/coffee/Type=Macchiato.png';
import mocaccino from '/assets/coffee/Type=Mochaccino.png';
import chocolateQuente from '/assets/coffee/Type=Chocolate Quente.png';
import cubano from '/assets/coffee/Type=Cubano.png';
import havaiano from '/assets/coffee/Type=Havaiano.png';
import arabe from '/assets/coffee/Type=Árabe.png';
import irlandes from '/assets/coffee/Type=Irlandês.png';

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

      <MainContainer>
        <NavMain />

        <ListCoffeeContainer>
          <Card
            src={tradicional}
            alt=""
            title="Expresso Tradicional"
          />
          <Card
            src={americano}
            alt=""
            title="Expresso Americano"
          />
          <Card
            src={cremoso}
            alt=""
            title="Expresso Cremoso"
          />
          <Card
            src={gelado}
            alt=""
            title="Expresso Gelado"
          />
          <Card
            src={comLeite}
            alt=""
            title="Café com Leite"
          />
          <Card
            src={latte}
            alt=""
            title="Latte"
          />
          <Card
            src={capuccino}
            alt=""
            title="Capuccino"
          />
          <Card
            src={macchiato}
            alt=""
            title="Macchiato"
          />
          <Card
            src={mocaccino}
            alt=""
            title="Mocaccino"
          />
          <Card
            src={chocolateQuente}
            alt=""
            title="Chocolate Quente"
          />
          <Card
            src={cubano}
            alt=""
            title="Cubano"
          />
          <Card
            src={havaiano}
            alt=""
            title="Havaiano"
          />
          <Card
            src={arabe}
            alt=""
            title="Árabe"
          />
          <Card
            src={irlandes}
            alt=""
            title="Irlandês"
          />
        </ListCoffeeContainer>
      </MainContainer>
    </>
  )
}
