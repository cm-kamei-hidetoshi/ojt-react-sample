import { FC } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductsPage.hooks";

export const ProductsPage: FC = () => {
  const { products } = useProducts();

  return (
    <>
      <Link to="/products/new">New Product</Link>
      <ul>
        {products?.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <li>
              {product.id}:{product.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
