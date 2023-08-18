"use client";

import { styled } from "styled-components";

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/defaul-page-layout";
import { CartCard } from "@/components/cart-card";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatterPrice } from "@/utils/formatter-price";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: var(--color-text-dark-two);

  h1 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 15px;
  }
`;

export default function Cart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  console.log(value);

  const calculeteTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = formatterPrice(calculeteTotal(value));

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });

    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <Section>
          <BackButton navigate="/" />
          <h1>Seu carrinho</h1>
          <p>
            Total ({value.length} produtos) <strong>{cartTotal}</strong>
          </p>
          {value.map((product) => (
            <CartCard
              product={product}
              key={product.id}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </Section>

        <div>Right</div>
      </Container>
    </DefaultPageLayout>
  );
}
