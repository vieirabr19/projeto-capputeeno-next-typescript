import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

import { ProductFetchResponse } from "@/types/products-response";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `
    query{
      allProducts{
        id,
        name,
        price_in_cents,
        image_url
      }
    }`,
  });
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
