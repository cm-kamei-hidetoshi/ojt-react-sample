import style from "./Products.module.css";
import { useProducts } from "./Products.hooks";

export function ProductsPage() {
  const { products, loading } = useProducts();

  return (
    <>
      <header className={style.header}>header</header>
      <main className={style.main}>
        {loading && <p>Loading</p>}
        {products?.map((product) => (
          <p>
            {product.id}:{product.title}
          </p>
        ))}
      </main>
      <footer className={style.footer}>footer</footer>
    </>
  );
}
