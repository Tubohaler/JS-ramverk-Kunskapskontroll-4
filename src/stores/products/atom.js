import { atom } from "recoil";
import axios from "axios";

// define Cart State
export const productsState = atom({
  key: "productsState",
  default: [],
  effects: [
    ({ setSelf }) => {
      axios
        .get("https://k4backend.osuka.dev/products")
        .then((res) => setSelf(res.data))
        .catch((e) => console.error(e));
    },
  ],
});
