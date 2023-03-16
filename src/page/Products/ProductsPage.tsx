import style from "./ProductsPage.module.css";
import { useProducts } from "./ProductsPage.hooks";
import { FC } from "react";

export const ProductsPage: FC = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <header className={style.header}>header</header>
      <main className={style.main}>
        {loading && <p>Loading</p>}
        <ul>
          {products?.map((product) => (
            <a href={`/products/${product.id}`}>
              <li>
                {product.id}:{product.title}
              </li>
            </a>
          ))}
        </ul>
      </main>
      <footer className={style.footer}>footer</footer>
    </>
  );
};
