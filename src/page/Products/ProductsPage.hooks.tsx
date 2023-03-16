import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setProducts(res.products);
      });
  }, []);

  return {
    loading,
    products,
    setProducts,
  };
}
