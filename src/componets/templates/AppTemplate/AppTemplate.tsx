import style from "./AppTemplate.module.css";
import React, { FC, PropsWithChildren } from "react";

type AppTemplateProps = {
  loading: boolean;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export const AppTemplate: FC<PropsWithChildren<AppTemplateProps>> = ({
  loading,
  header,
  footer,
  children,
}) => {
  return (
    <>
      <header className={style.header}>{header}</header>
      <main className={style.main}>
        {loading && <p>Loading</p>}
        {children}
      </main>
      <footer className={style.footer}>{footer}</footer>
    </>
  );
};
