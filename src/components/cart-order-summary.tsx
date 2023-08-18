import { styled } from "styled-components";

import { Divider } from "./divider";

const Container = styled.div`
  background: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--color-text-dark-two);

  h1 {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;

    &:nth-of-type(3) {
      font-weight: 600;
    }
  }

  button {
    border: none;
    border-radius: 4px;
    padding: 10px;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: 500;
    background-color: var(--color-green);
    font-family: inherit;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const Footer = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  list-style: none;

  a {
    color: var(--color-text-dark);
    text-transform: uppercase;
    font-size: 14px;
  }
`;

interface CartOrderSummaryProps {
  subTotal: string;
  total: string;
}

export function CartOrderSummary(props: CartOrderSummaryProps) {
  return (
    <Container>
      <Infos>
        <h1>Resumo do pedido</h1>
        <p>
          Subtotal de produtos <span>{props.subTotal}</span>
        </p>
        <p>
          Entrega <span>R$ 40,00</span>
        </p>
        <Divider />
        <p>
          Total <span>{props.total}</span>
        </p>
        <button>Finalizar a compra</button>
      </Infos>

      <Footer>
        <li>
          <a href="#">Ajuda</a>
        </li>
        <li>
          <a href="#">reembolsos</a>
        </li>
        <li>
          <a href="#">entregas e frete</a>
        </li>
        <li>
          <a href="#">trocas e devoluções</a>
        </li>
      </Footer>
    </Container>
  );
}
