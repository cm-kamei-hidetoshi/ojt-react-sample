import { FC } from "react";
import { Header } from "../../componets/Header";
import { AppTemplate } from "../../componets/templates/AppTemplate/AppTemplate";
import { useProducts } from "./ProductsPage.hooks";

export const ProductsPage: FC = () => {
  const { products } = useProducts();

  return (
    <AppTemplate loading={false} header={<Header />} footer={<div>footer</div>}>
      <ul>
        {products?.map((product) => (
          <a href={`/products/${product.id}`} key={product.id}>
            <li>
              {product.id}:{product.title}
            </li>
          </a>
        ))}
      </ul>
    </AppTemplate>
  );
};
