export class MockProductsRepository {
  fetchProducts() {
    return Promise.resolve({ products: [] });
  }
}
