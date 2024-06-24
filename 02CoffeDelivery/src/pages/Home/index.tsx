import { useState } from 'react';

import { coffeeList } from '../../data/ListOfCoffee';

import {
  InfoItems,
  ItemsContainer,
  Title,
  IntroContainer,
  IntroInformationContainer,
  MainContainer,
  ListCoffeeContainer,
} from "./styles";

import { Navbar } from '../../components/Navbar';
import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react';
import { NavMain } from './components/MainHeader';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { InputNumber } from '../../components/InputNumber';
import { Button } from '../../components/Button';


// Images
import infoImgCafe from '/assets/Imagem.png';

export function Home() {
  const [products, setProducts] = useState(coffeeList);
  
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
          {products.map((item) => {
            return(
              <Card.Root variant="shopping">
                <Card.Img src={item.img} alt={item.alt} />
                <Card.Badges>
                  <Badge text={item.tag.Tradicional} />
                </Card.Badges>
                <Card.Description
                  title={item.description.title}
                  text={item.description.text}
                />
                <Card.Footer>
                  <Card.Price value={item.price} />
                  <Card.Actions>
                    <InputNumber />
                    <Button variant='icon'>
                      <ShoppingCartSimple size={16} weight='fill' />
                    </Button>
                  </Card.Actions>
                </Card.Footer>
              </Card.Root>
            )
          })}
        </ListCoffeeContainer>
      </MainContainer>
    </>
  )
}
