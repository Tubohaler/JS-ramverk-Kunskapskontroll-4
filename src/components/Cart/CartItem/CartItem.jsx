import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRecoilState } from "recoil";
import { cartState } from "../../../stores/Cart/atom";

const CartItem = ({ item }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const deleteHandler = () => {
    const newCartItems = [...cartItems].filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  return (
    <Card>
      <CardMedia image={item.image} alt={item.title} />
      <CardContent>
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="h5">{item.price}$</Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button
          onClick={deleteHandler}
          variant="contained"
          type="button"
          color="secondary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
