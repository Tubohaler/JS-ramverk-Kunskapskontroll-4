import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CartItem from "./CartItem/CartItem";
import { useRecoilState } from "recoil";
import { cartState } from "../../stores/Cart/atom";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no stuff in the cart, go get some!
    </Typography>;
  };

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />{" "}
          </Grid>
        ))}
      </Grid>
      <div>
        <Typography variant="h4">Subtotal:</Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => setCartItems([])}
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );

  if (!cartItems) return "loading...";

  return (
    <Container>
      <div />
      <Typography variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cartItems ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
