import { Product } from "./product";

export interface ProductFetchResponse {
  data: {
    allProducts: Product[];
  };
}
