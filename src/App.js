import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Products, Navbar, Cart } from "./components";
import Login from "./components/Login/Login";
import IndividualProduct from "./components/Products/Product/IndividualProduct";
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

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/products/:id" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
