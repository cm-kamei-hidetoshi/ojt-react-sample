import { FC } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AppLayout } from "./componets/layouts/AppLayouts";
import { PrivateLayout } from "./componets/layouts/PrivateLayout";
import { useAuth } from "./features/hooks/auth.hooks";
import { LoginPage } from "./page/Login/LoginPage";
import { NewProductPage } from "./page/NewProduct/NewProductPage";
import { ProductPage } from "./page/Product/ProductPage";
import { ProductsPage } from "./page/Products/ProductsPage";
import { UsersPage } from "./page/Users/UsersPage";

export const AppRouter: FC = () => {
  const { auth } = useAuth();
  if (auth.type === "logined") {
    return <PrivateRoutes />;
  }
  return <PublicRoutes />;
};

const PublicRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
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
      </Routes>
    </BrowserRouter>
  );
};
