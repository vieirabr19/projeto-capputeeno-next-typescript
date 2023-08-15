import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";

import { ProductFetchResponse } from "@/types/products-response";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphql-filters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

// const fetcher = (): AxiosPromise<ProductFetchResponse> => {
//   return axios.post(API_URL, {
//     query: `
//     query{
//       allProducts(filter: {category: "t-shirts"}){
//         id,
//         name,
//         price_in_cents,
//         image_url
//       }
//     }`,
//   });
// };

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const query = mountQuery(type, priority);

  const searchDeferred = useDeferredValue(search);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
