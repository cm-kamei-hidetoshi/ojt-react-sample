import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sideNaviState } from "../../features/atoms/side-navi-atom";
import { Header } from "../Header";
import { AppTemplate } from "../templates/AppTemplate/AppTemplate";
import { Flex } from "../views/Flex";
import style from "./AppLayouts.module.css";

export const AppLayout: FC = () => {
  const sideNavi = useRecoilValue(sideNaviState);

  return (
    <AppTemplate header={<Header />} loading={false} footer={<div>Footer</div>}>
      <Flex className={style.foucs_navi_item}>
        <Flex as="article">basdfsafsafsadfasasf</Flex>
        <nav className={style.side_navi}>
          <a href="/products">A: Products</a>
          <Link
            to={"/products"}
            className={
              sideNavi === "PRODUCT" ? style.foucs_navi_item : undefined
            }
          >
            Link: Products
          </Link>
          <Link
            to="/users"
            className={sideNavi === "USER" ? style.foucs_navi_item : undefined}
          >
            Users
          </Link>
        </nav>
        <div>
          <React.Suspense fallback={<div>loading</div>}>
            <Outlet />
          </React.Suspense>
        </div>
      </Flex>
    </AppTemplate>
  );
};
