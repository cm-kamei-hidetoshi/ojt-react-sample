import { atom } from "recoil";

type SideNavi = "PRODUCT" | "USER";
export const sideNaviState = atom<SideNavi>({
  key: "sideNaviState", // unique ID (with respect to other atoms/selectors)
  default: "PRODUCT", // default value (aka initial value)
});
