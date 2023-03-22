import { Product } from "../entity/Product";

export class ProductRepository {
  static fetchProductBy(productId: number): Promise<Product> {
    return fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    );
  }
}
