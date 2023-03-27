import { FC, useCallback } from "react";
import { useAuth } from "../../features/hooks/auth.hooks";
import { AuthUsecase } from "../../features/usecase/AuthUsecase";

export const useLoginPage = () => {
  const { setAuth } = useAuth();
  const onClickLogin = useCallback(async () => {
    try {
      const user = await AuthUsecase.login();
      setAuth({ type: "logined", user });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return { onClickLogin };
};
