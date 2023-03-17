import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "../../useQuery";

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

type ProductParam = { productId: string };

export function useProduct() {
  const { productId } = useParams<ProductParam>();
  const product = useQuery<Product>(
    `https://dummyjson.com/products/${productId}`
  );
  return {
    product,
  };
}
