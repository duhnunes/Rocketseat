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
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';

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
          <Card.Root variant="shopping">
            <Card.Img src={tradicional} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Expresso Tradicional"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={americano} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Expresso Americano"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={cremoso} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Expresso Cremoso"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={gelado} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Expresso Gelado"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={comLeite} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Café com Leite"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={latte} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Latte"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={capuccino} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Capuccino"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={macchiato} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Macchiato"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={mocaccino} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Mocaccino"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={chocolateQuente} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Chocolate Quente"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={cubano} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Cubano"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={havaiano} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Havaiano"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={arabe} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Árabe"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

          <Card.Root variant="shopping">
            <Card.Img src={irlandes} alt="" />
            <Card.Badges>
              <Badge text="Tradicional" />
            </Card.Badges>
            <Card.Content
              title="Irlandês"
              text="O tradicional café feito com água quente e grãos moídos"
            />
            <Card.Actions />
          </Card.Root>

        </ListCoffeeContainer>
      </MainContainer>
    </>
  )
}
