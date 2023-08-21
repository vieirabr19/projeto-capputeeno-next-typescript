"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductsCard } from "./products-card";
import { styled } from "styled-components";

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint768}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint1024}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint1280}) {
    grid-template-columns: repeat(4, 1fr);
  }
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
          id={product.id}
        />
      ))}
    </ContainerCard>
  );
}
