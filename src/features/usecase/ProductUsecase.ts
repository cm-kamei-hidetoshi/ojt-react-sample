import { ProductRepository } from "../repository/ProductRepository";

export class ProductUsecase {
  static fetchProductBy(productId: number) {
    return ProductRepository.fetchProductBy(productId);
  }
}
