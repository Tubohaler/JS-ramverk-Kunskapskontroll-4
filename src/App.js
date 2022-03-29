import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Products, Navbar, Cart } from "./components";
import IndividualProduct from "./components/Products/Product/IndividualProduct";
import { useRecoilValue } from "recoil";
import { cartState } from "./stores/Cart/atom";

function App() {
  // const [products, setProducts] = useState([]);
  const itemsInCart = useRecoilValue(cartState);

  return (
    <div>
      <Navbar totalItems={itemsInCart.length} />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/products/:id" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
