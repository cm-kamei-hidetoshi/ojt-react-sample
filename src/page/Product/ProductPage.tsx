import { FC } from "react";
import { Header } from "../../componets/Header";
import { AppTemplate } from "../../componets/templates/AppTemplate/AppTemplate";
import { useProduct } from "./ProductPage.hooks";

export const ProductPage: FC = () => {
  const { product, loading } = useProduct();

  return (
    <AppTemplate
      loading={loading}
      header={<Header />}
      footer={<div>footer</div>}
    >
      {product && (
        <ul>
          <li>{product.title}</li>
          <li>{product.description}</li>
          <li>{product.price}</li>
          <li>
            <img src={product.thumbnail} alt="" />
          </li>
        </ul>
      )}
    </AppTemplate>
  );
};
