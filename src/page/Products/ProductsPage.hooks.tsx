import { useEffect, useState } from "react";
import { ProductsRepository } from "../../features/repository/ProductsRepository";
import { MockProductsRepository } from "../../features/repository/MockProductsRepository";
import { ProductsUsecase } from "../../features/usecase/ProductsUsecase";
import { useQuery } from "../../useQuery";
type ProductsResponse = {
  products: Product[];
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export function useProducts() {
  const usecase = new ProductsUsecase(new ProductsRepository());

  const { products } = useQuery<ProductsResponse>(
    "https://dummyjson.com/products"
  );
  return {
    products,
  };
}
