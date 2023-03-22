import { ProductRepository } from "../repository/ProductRepository";

export class ProductUsecase {
  static async fetchProductBy(productId: number) {
    return ProductRepository.fetchProductBy(productId);
  }
}
