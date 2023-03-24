import { ProductRepository } from "../repository/ProductRepository";

export class ProductUsecase {
  static fetchProductBy(productId: number) {
    return ProductRepository.fetchProductBy(productId);
  }
  static postProduct(product: { title: string; description: string }) {
    return ProductRepository.postProduct(product);
  }
}
