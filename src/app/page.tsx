"use client";

import { DefaultPageLayout } from "@/components/defaul-page-layout";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";

export default function Home() {
  return (
    <DefaultPageLayout>
      <FilterBar />
      <ProductsList />
    </DefaultPageLayout>
  );
}
