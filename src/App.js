import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Products, Navbar, Cart } from "./components";
import IndividualProduct from "./components/Products/Product/IndividualProduct";
import { axios } from "axios";
import { cartState } from "./stores/Cart/atom";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";

// define Cart State
const cartState = ({
  key: "cartState",
  default: [] // default value of cart, empty array
});

// Fetch remote API using selector method
const fetchProducts = selector({
  key: "Products",
  get: async () => {
    try {
      const res = await axios("https://k4backend.osuka.dev/products");
      return res.data || [];
    } catch (error) {
      console.log(`ERROR: \n${error}`);
      return [];
    }
  },
});

// create a view to display the products
const FakeProducts = (addOnCartItem) => {

  

  // get products list from Recoil state
  const dummyProducts = useRecoilValue(fetchProducts);
  return (
    <>
      <div></div>
      <div></div>
      {dummyProducts.map(product) => (
      <div>
        <img src={product.image} alt="" />
        <div>
          <h2>{product.title}</h2>
          <h5>{product.category}</h5>
          <p>{product.description}</p>
          <h5>(${product.price})<button onClick={() => onAddCartItem(product)}>Add</button> </h5>
        </div>
      </div>
      )}
    </>
  );
};

function App() {
// set state 
const [cart, setCart] = useRecoilState(cartState);




  return (
    <div>
      <Navbar totalItems={itemsInCart.length} />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/products" element={<Products />} />
        </React.Suspense>

        <Route exact path="/products/:id" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
