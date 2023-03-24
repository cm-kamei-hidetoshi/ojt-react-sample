import { Product } from "../entity/Product";

export class ProductRepository {
  static fetchProductBy(productId: number): Promise<Product> {
    return fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    );
  }

  static postProduct(product: {
    title: string;
    description: string;
  }): Promise<void> {
    return fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    }).then((res) => res.json());
  }
}
