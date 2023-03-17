import { useEffect, useState } from "react";
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

let data: Product[];

export function useProducts() {
  const { products } = useQuery<ProductsResponse>(
    "https://dummyjson.com/products"
  );
  return {
    products,
  };
}
