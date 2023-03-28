import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../features/hooks/auth.hooks";
import { LoginPage } from "../../page/Login/LoginPage";

export const PrivateLayout: FC = () => {
  const { auth } = useAuth();
  return auth.type === "logined" ? <Outlet /> : <LoginPage />;
};
