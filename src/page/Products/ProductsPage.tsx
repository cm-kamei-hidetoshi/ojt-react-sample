import style from "./ProductsPage.module.css";
import { useProducts } from "./ProductsPage.hooks";
import { FC } from "react";
import { AppTemplate } from "../../componets/templates/AppTemplate/AppTemplate";
import { Header } from "../../componets/Header";

export const ProductsPage: FC = () => {
  const { products, loading } = useProducts();

  return (
    <AppTemplate
      loading={loading}
      header={<Header />}
      footer={<div>footer</div>}
    >
      <ul>
        {products?.map((product) => (
          <a href={`/products/${product.id}`}>
            <li>
              {product.id}:{product.title}
            </li>
          </a>
        ))}
      </ul>
    </AppTemplate>
  );
};
