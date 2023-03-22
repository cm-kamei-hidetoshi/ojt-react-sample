import { Product } from "../entity/Product";

type FetchProductsResponse = {
  products: Product[];
};

export class ProductsRepository {
  static fetchProducts(): Promise<FetchProductsResponse> {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  }
}
