"use client";

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/defaul-page-layout";
import { CartIcon } from "@/components/icons/cart-icon";
import { useProduct } from "@/hooks/useProduct";
import { formatterPrice } from "@/utils/formatter-price";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 15px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  color: var(--color-text-dark-two);

  div {
    span {
      font-size: 16px;
      font-weight: 400;
    }

    h1 {
      font-size: 32px;
      font-weight: 300;
    }

    strong {
      color: var(--color-shapes-dark);
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
      display: inline-block;
    }

    p {
      font-size: 12px;
      font-weight: 400;
    }

    h3 {
      margin-top: 40px;
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }

    p:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;

const Button = styled.button`
  background-color: var(--color-brand-blue);
  border-radius: 4px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    path {
      stroke: white;
    }
  }
`;

interface ParamsProps {
  searchParams: { id: string };
}

export default function Product({ searchParams }: ParamsProps) {
  const { data } = useProduct(searchParams.id);
  const category = data?.category === "mugs" ? "Caneca" : "Camiseta";
  const price = formatterPrice(data?.price_in_cents ?? 0);

  console.log(data);

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <Section>
          <img src={data?.image_url} alt="" />
          <Infos>
            <div>
              <span>{category}</span>
              <h1>{data?.name}</h1>
              <strong>{price}</strong>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <h3>Descrição</h3>
              <p>{data?.description}</p>
            </div>
            <Button>
              <CartIcon />
              Adicionar ao carrinho
            </Button>
          </Infos>
        </Section>
      </Container>
    </DefaultPageLayout>
  );
}
