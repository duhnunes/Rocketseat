/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";
import { RequestContainer, CheckoutContainer, RequestCard, RequestHeader, RequestForm, InputContainer, RequestButtons, SelectedProductContainer, TotalContainer, TotalItem } from "./styles";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "./components/Card";

import coffee from '/assets/coffee/Type=Expresso.png';

export function Checkout() {
  const [cep, setCep] = useState('');

  const handleChange = (e :any) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    setCep(value);
  };
  return(
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
            <input
              type="tel"
              name="cep"
              placeholder="CEP"
              value={cep}
              onChange={handleChange}
              maxLength={9}
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
          <Card src={coffee} />
          <hr />
          <Card src={coffee} />
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

          <Button variant="primary">
            Confirmar Pedido
          </Button>
        </RequestCard>
      </SelectedProductContainer>

    </CheckoutContainer>
  )
}