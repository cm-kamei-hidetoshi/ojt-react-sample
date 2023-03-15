import { useEffect, useState } from "react";
import "./App.css";
import style from "./App.module.css";

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

function App() {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
    <>
      <header className={style.header}>header</header>
      <main className={style.main}>
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

export default App;
