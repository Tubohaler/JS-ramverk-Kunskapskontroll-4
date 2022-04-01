import { selector } from "recoil";
import { cartState } from "./atom";

// define totala state with a selector
export const cartTotalPriceState = selector({
  key: "cartTotalPriceState",
  get: ({ get }) => {
    const cart = get(cartState);
    const total = cart.reduce((prev, curr) => prev + curr.price, 0);
    return {
      total,
    };
  },
});
