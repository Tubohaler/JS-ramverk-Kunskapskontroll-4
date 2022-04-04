import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { productsState } from "../../../stores/products/atom";
import Container from "@mui/material/Container";
import { cartState } from "../../../stores/Cart/atom";

function IndividualProduct() {
  const params = useParams();

  const products = useRecoilValue(productsState);
  const product = products.find((p) => p.id === parseInt(params.productId));
  const [cart, setCart] = useRecoilState(cartState);

  function handleAddToCart() {
    const NewCartItem = {
      id: product.id,
      qty: 1,
    };
    setCart([...cart, NewCartItem]);
  }

  return !product ? (
    "Product not found"
  ) : (
    <Container>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </Container>
  );
}

export default IndividualProduct;
