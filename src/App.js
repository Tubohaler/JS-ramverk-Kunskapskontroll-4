import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Products,
  IndividualProduct,
  Navbar,
  Cart,
  Admin,
  Login,
  Profile,
  Register,
} from "./components";

import { cartState } from "./stores/Cart/atom";
import { useRecoilValue } from "recoil";
import { login } from "./api";

function App() {
  const itemsInCart = useRecoilValue(cartState);

  useEffect(() => {
    login();
  }, []);

  return (
    <div>
      <Navbar totalItems={itemsInCart.length} />

      {/* Behöver jag ha "exact" i min path? */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:productId" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
