import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProductsPage } from "./page/Products/ProductsPage";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<ProductsPage />}></Route>)
);
