import { assert, test, vi } from "vitest";
import { Product } from "../entity/Product";
import { ProductRepository } from "../repository/ProductRepository";
import { ProductUsecase } from "./ProductUsecase";

const product: Product = {
  id: 1,
  title: "mock prduct",
  description: "mock prduct",
  price: 10,
  discountPercentage: 0,
  rating: 5,
  stock: 3,
  brand: "cm",
  category: "prduct",
  thumbnail: "",
  images: [],
};

test("ProductUsecase Test", async () => {
  const spy = vi.spyOn(ProductRepository, "fetchProductBy");
  spy.mockReturnValue(Promise.resolve(product));

  const result = await ProductUsecase.fetchProductBy(1);
  assert.deepStrictEqual(result, product);
}, 1000);
