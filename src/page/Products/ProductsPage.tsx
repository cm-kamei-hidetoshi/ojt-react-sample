import { FC } from "react";
import { useProducts } from "./ProductsPage.hooks";

export const ProductsPage: FC = () => {
  const { products } = useProducts();

  return (
    <ul>
      {products?.map((product) => (
        <a href={`/products/${product.id}`} key={product.id}>
          <li>
            {product.id}:{product.title}
          </li>
        </a>
      ))}
    </ul>
  );
};
