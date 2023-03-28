import { FC } from "react";
import { useLoginPage } from "./LoginPage.hooks";

export const LoginPage: FC = () => {
  const { onClickLogin, isLoading } = useLoginPage();
  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <div>
          <h2>LoginPage</h2>
          <button onClick={onClickLogin}>Google Login</button>
        </div>
      )}
    </>
  );
};
