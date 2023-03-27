import { FC } from "react";
import { useLoginPage } from "./LoginPage.hooks";

export const LoginPage: FC = () => {
  const { onClickLogin } = useLoginPage();
  return (
    <div>
      <h2></h2>LoginPage
      <button onClick={onClickLogin}>Google Login</button>
    </div>
  );
};
