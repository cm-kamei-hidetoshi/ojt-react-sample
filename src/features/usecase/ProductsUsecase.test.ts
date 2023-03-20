import { test, assert } from "vitest";

import { MockProductsRepository } from "../repository/MockProductsRepository";
import { ProductsUsecase } from "./ProductsUsecase";

test("ProductsUsecase Test", async () => {
  const usecase = new ProductsUsecase(new MockProductsRepository());
  const result = await usecase.fetchProducts();
  assert.equal(result.products.length, 0);
}, 1000);
