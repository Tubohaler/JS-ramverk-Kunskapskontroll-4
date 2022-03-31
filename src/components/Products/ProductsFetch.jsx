import { atom } from "recoil";
import axios from "axios";

const productsState = atom({
  key: "ProductsState",
  default: [],
});

export default productsState;
