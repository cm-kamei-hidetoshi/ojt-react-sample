import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  const { productId } = useParams<ProductParam>();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setProduct(res);
      });
  }, []);

  return {
    loading,
    product,
  };
}
