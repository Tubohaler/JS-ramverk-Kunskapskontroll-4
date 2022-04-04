import { atom } from "recoil";

export const authState = atom({
  key: "auth",
  default: {
    user: { role: null },

    token: null,
  },
});
