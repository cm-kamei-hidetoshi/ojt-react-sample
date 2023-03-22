import { ProductsRepository } from "../repository/ProductsRepository";

export class ProductsUsecase {
  static fetchProducts() {
    return ProductsRepository.fetchProducts();
  }
}
