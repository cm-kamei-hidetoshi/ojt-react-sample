import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sideNaviState } from "../../features/atoms/side-navi-atom";
import { Header } from "../Header";
import { AppTemplate } from "../templates/AppTemplate/AppTemplate";
import style from "./AppLayouts.module.css";

export const AppLayout: FC = () => {
  const sideNavi = useRecoilValue(sideNaviState);

  return (
    <AppTemplate header={<Header />} loading={false} footer={<div>Footer</div>}>
      <div className={style.content}>
        <nav className={style.side_navi}>
          <Link
            to={"/products"}
            className={
              sideNavi === "PRODUCT" ? style.foucs_navi_item : undefined
            }
          >
            Products
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
      </div>
    </AppTemplate>
  );
};
