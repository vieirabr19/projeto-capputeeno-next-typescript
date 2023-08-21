"use client";

import { DefaultPageLayout } from "@/components/defaul-page-layout";
import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { ProductsList } from "@/components/products-list";
import { styled } from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ConteinerPagination = styled.div`
  display: flex;
  justify-content: right;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <Conteiner>
        <FilterBar />

        <ConteinerPagination>
          <Pagination />
        </ConteinerPagination>

        <ProductsList />

        <ConteinerPagination>
          <Pagination />
        </ConteinerPagination>
      </Conteiner>
    </DefaultPageLayout>
  );
}
