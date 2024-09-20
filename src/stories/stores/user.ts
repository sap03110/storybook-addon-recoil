import { atom } from "recoil";

type User = {
  name?: string;
};

export const userAtomKey = "user";
export const userState = atom<User>({
  key: userAtomKey,
  default: null,
});
