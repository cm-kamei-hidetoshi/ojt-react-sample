import { assert, test, vi } from "vitest";

import { ProductsUsecase } from "./ProductsUsecase";

test("ProductsUsecase Test", async () => {
  const spy = vi.spyOn(ProductsUsecase, "fetchProducts");
  spy.mockReturnValue(Promise.resolve({ products: [] }));
  const result = await ProductsUsecase.fetchProducts();
  assert.deepStrictEqual(result.products, []);
}, 1000);
