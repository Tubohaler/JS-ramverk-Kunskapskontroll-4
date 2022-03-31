import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Products, Navbar, Cart } from "./components";
import IndividualProduct from "./components/Products/Product/IndividualProduct";
import { axios } from "axios";
import { cartState } from "./stores/Cart/atom";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import { product } from "prelude-ls";

// define Cart State
const ProductsState = atom({
  key: "ProductsState",
  default: [] // default value of cart, empty array
});

// define totala state with a selector
const cartTotalState = selector({
  key: "cartTotalState",
  get: ({get}) => {
    const cart = get(ProductsState)
    const total = cart.reduce((prev, curr) =>  prev + curr.price, 0);
    return {
      total
    }
  }
});

// Fetch remote API using selector method
const fetchProducts = selector({
  key: "Products",
  get: async () => {
    try {
      const response = await axios("https://k4backend.osuka.dev/products");
      return response.data || [];
    } catch (error) {
      console.log(`ERROR: \n${error}`);
      return [];
    }
  },
});

// create a view to display the products
const Products = (addOnCartItem) => {
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

const Basket = () => {
  return (<>
  <div>Your Basket {!products.length ? "" : product.length}</div>

  <div>
    {
    !products.length
    ? "No Items"
    : products.map((product) => (
      <p key={product.id}>
        {product.title} (${product.price})
        <button onClick={() => onRemoveCartItem(product)} >Remove</button>
      </p>
    ))
 }   
  </div>
  {product.length ? "" : <div>TOTAL: ${total}</div>}
  </>
);
}


function App() {
// set the cart state like useState
const [cart, setCart] = useRecoilState(ProductsState);

const [{total}, setTotalFromSelector = useRecoilState(cartTotalState);

// Add item to cart
const AddCartItem = (product) => {
  setCart((cart) =>  {
    cart.find((item) => item.id === product.id) 
    ? cart : [...cart, product]
  })
}

const removeCartItem = (product) {
  setCart((cart) => cart.filter((item) => item.id !== product.id))
}

  return (
    <div>
      <Navbar totalItems={itemsInCart.length} />

      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* Probably rewrite this later  */}
        <React.Suspense fallback={<div>Loading...</div>}> 
        <Route onAddCartItem={AddCartItem}  exact path="/products" element={<Products />} /> 
        </React.Suspense>

        <Route exact path="/products/:id" element={<IndividualProduct />} />

        <Route exact path="/cart" element={<Cart />} />
        
        {/* Probably rewrite this later  */}
        <div>
          <Basket total={total} setCart={setTotalFromSelector}  products={cart} onRemoveCartItem={removeCartItem}/>
        </div>

      </Routes>
    </div>
  );
}

export default App;
