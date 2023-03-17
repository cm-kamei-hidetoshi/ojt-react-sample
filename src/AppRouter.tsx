import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProductPage } from "./page/Product/ProductPage";
import { ProductsPage } from "./page/Products/ProductsPage";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ProductsPage />} />
      <Route path="products">
        <Route path=":productId" element={<ProductPage />} />
      </Route>
    </Route>
  )
);
