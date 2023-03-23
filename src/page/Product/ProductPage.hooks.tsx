import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sideNaviState } from "../../features/atoms/side-navi-atom";
import { ProductUsecase } from "../../features/usecase/ProductUsecase";

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
  const { data } = useQuery({
    queryKey: ["ProductUsecase", "fetchProductBy", productId],
    queryFn: () => ProductUsecase.fetchProductBy(Number(productId)),
  });

  const setSideNavi = useSetRecoilState(sideNaviState);
  useEffect(() => {
    setSideNavi("PRODUCT");
  }, [setSideNavi]);

  return {
    product: data,
  };
}
