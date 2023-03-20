import { Product } from "../entity/Product";

export interface IProductsRository {
  fetchProducts(): Promise<{
    products: Product[];
  }>;
}

export class ProductsUsecase {
  constructor(private repositroy: IProductsRository) {}

  async fetchProducts() {
    return this.repositroy.fetchProducts();
  }
}
