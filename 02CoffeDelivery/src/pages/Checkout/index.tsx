/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";

import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Timer } from "@phosphor-icons/react";

import { RequestContainer, CheckoutContainer, RequestCard, RequestHeader, RequestForm, InputContainer, RequestButtons, SelectedProductContainer, TotalContainer, TotalItem, PanelContainer, OrderInfoContainer, OrderInfoItem, MotoboyContainer } from "./styles";
import { Button } from "../../components/Button";
import { Card } from '../../components/Card';

import coffee from '/assets/coffee/Type=Expresso.png';
import motoboy from '/assets/Illustration.png';
import cremoso from '/assets/coffee/Type=Expresso Cremoso.png';


export function Checkout(props: Partial<PatternFormatProps>) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirmOrder = () => {
    setIsSuccess((prev) => !prev)
  }

  return(
    <>
      {!isSuccess ? (
        <CheckoutContainer>
          <RequestContainer>
            <h2>Complete seu pedido</h2>
            <RequestCard>
              <RequestHeader>
                <MapPin weight="fill" />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <span>
                  Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </RequestHeader>

              <RequestForm>
                <PatternFormat
                  {...props}
                  format="#####-###"
                  mask="_"
                  placeholder="CEP"
                  type="tel"
                />
                <input
                  type="text"
                  name="street"
                  placeholder="Rua"
                />
                <InputContainer>
                  <input
                    type="text"
                    name="number"
                    placeholder="Número"
                  />
                  <input
                    type="text"
                    name="complement"
                    placeholder="Complemento"
                    className="flex-1"
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    name="district"
                    placeholder="Bairro"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Cidade"
                    className="flex-1"
                  />
                  <input
                    type="text"
                    name="uf"
                    placeholder="UF"
                    className="uf"
                    maxLength={2}
                  />
                </InputContainer>
              </RequestForm>
            </RequestCard>

            <RequestCard>
              <RequestHeader variant="secondary">
                <CurrencyDollar />
                <div>
                  <h3>Pagamento</h3>
                  <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                  </span>
                </div>
              </RequestHeader>

              <RequestButtons>
                <Button variant="select">
                  <CreditCard />
                Cartão de crédito
                </Button>
                <Button variant="select">
                  <Bank />
                Cartão de débito
                </Button>
                <Button variant="select">
                  <Money />
                Dinheiro
                </Button>
              </RequestButtons>
            </RequestCard>
          </RequestContainer>

          <SelectedProductContainer>
            <h2>Cafés selecionados</h2>
            <RequestCard>

              <Card.Root variant="cart">
                <Card.Img src={coffee} alt="" />
                <Card.Cart.Info title="Expresso tradicional" />
                <Card.Price value="9,90" />
              </Card.Root>
              <hr />
              
              <Card.Root variant="cart">
                <Card.Img src={cremoso} alt="" />
                <Card.Cart.Info title="Expresso tradicional" />
                <Card.Price value="9,90" />
              </Card.Root>
              <hr />

              <TotalContainer>
                <TotalItem>
                  <span>Total de itens</span>
                  <span>R$ 29,70</span>
                </TotalItem>
                <TotalItem>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </TotalItem>
                <TotalItem>
                  <span className="bold">Total</span>
                  <span className="bold">R$ 33,20</span>
                </TotalItem>
              </TotalContainer>

              <Button variant="primary" onClick={handleConfirmOrder}>
              Confirmar Pedido
              </Button>
            </RequestCard>
          </SelectedProductContainer>

        </CheckoutContainer>
      ) : (
        <CheckoutContainer>
          <PanelContainer>
            <div>
              <h2>Uhu! Pedido confirmado</h2>
              <span>
              Agora é só aguardar que logo o café chegará até você
              </span>
            </div>

            <OrderInfoContainer>
              <OrderInfoItem variant="primary">
                <MapPin weight="fill" />
                <div>
                  <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </div>
              </OrderInfoItem>
              <OrderInfoItem variant="secondary">
                <Timer weight="fill" />
                <div>
                  <p>Previsão de entrega</p>
                  <p><strong>20 min - 30 min</strong></p>
                </div>
              </OrderInfoItem>
              <OrderInfoItem variant="third">
                <CurrencyDollar />
                <div>
                  <p>Pagamento na entrega</p>
                  <p><strong>Cartão de Crédito</strong></p>
                </div>
              </OrderInfoItem>
            </OrderInfoContainer>
          </PanelContainer>

          <MotoboyContainer>
            <img src={motoboy} alt="" />
          </MotoboyContainer>
        </CheckoutContainer>
      ) }
      
    </>
  )
}