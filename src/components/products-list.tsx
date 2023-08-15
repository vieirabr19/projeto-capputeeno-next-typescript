"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductsCard } from "./products-card";
import { styled } from "styled-components";

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 30px;
`;

export function ProductsList() {
  const { data } = useProducts();

  return (
    <ContainerCard>
      {data?.map((product) => (
        <ProductsCard
          key={product.id}
          image={product.image_url}
          name={product.name}
          price={product.price_in_cents}
        />
      ))}
    </ContainerCard>
  );
}
