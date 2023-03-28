import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/auth-atom";
import { firebaseApp } from "../utils/firebase";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuth({ type: "not-login" });
        return;
      }
      setAuth({
        type: "logined",
        user: { email: user.email ?? "", name: user.displayName ?? "" },
      });
      return;
    });
  }, []);

  return { auth, setAuth };
};
