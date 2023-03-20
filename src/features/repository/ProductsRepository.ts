export class ProductsRepository {
  static fetchProducts() {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  }
}
