import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ProductsUsecase } from "../../features/usecase/ProductsUsecase";
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
  const { data } = useQuery({
    queryKey: ["ProductsUsecase", "fetchProducts"],
    queryFn: ProductsUsecase.fetchProducts,
  });

  useEffect(() => {
    console.log("test");
  }, []);

  return {
    products: data?.products ?? [],
  };
}
