import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { AppLayout } from "./componets/layouts/AppLayouts";
import { NewProductPage } from "./page/NewProduct/NewProductPage";
import { ProductPage } from "./page/Product/ProductPage";
import { ProductsPage } from "./page/Products/ProductsPage";
import { UsersPage } from "./page/Users/UsersPage";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Navigate to={"products"}></Navigate>} />
      <Route path="Users">
        <Route index element={<UsersPage />} />
      </Route>
      <Route path="products">
        <Route index element={<ProductsPage />} />
        <Route path="new" element={<NewProductPage />} />
        <Route path=":productId" element={<ProductPage />} />
      </Route>
    </Route>
  )
);
