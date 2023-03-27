import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/auth-atom";
import { AuthUsecase } from "../usecase/AuthUsecase";
import { firebaseApp } from "../utils/firebase";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  useEffect(() => {
    const auth = getAuth(firebaseApp);
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth({
          type: "logined",
          user: { email: user.email ?? "", name: user.displayName ?? "" },
        });
      }
    });
    // const user = AuthUsecase.currentUser();
    // if (user) {
    //   setAuth({ type: "logined", user });
    // }
    // console.log("auth", user);
  }, []);

  return { auth, setAuth };
};
