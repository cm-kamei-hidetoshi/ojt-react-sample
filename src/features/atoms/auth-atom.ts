import { atom } from "recoil";
import { User } from "../entity/User";

type NotLoginState = {
  type: "not-login";
};
type LoginState = {
  type: "logined";
  user: User;
};
type LoadingState = {
  type: "loading";
};

export const authState = atom<NotLoginState | LoginState | LoadingState>({
  key: "authState",
  default: { type: "loading" },
});
