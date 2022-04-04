import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import { useRecoilState } from "recoil";
import { cartState } from "../../../stores/Cart/atom";

const Product = ({ product }) => {
  const [itemsInCart, setItemsInCart] = useRecoilState(cartState);

  function handleAddToCart() {
    setItemsInCart([...itemsInCart, product]);
  }

  return (
    <div>
      <Card>
        <CardMedia
          image={product.image}
          title={product.title}
          component="img"
        />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link component={RouterLink} to={`/product/${product.id}`}>
            Read more
          </Link>
          <IconButton
            onClick={() => handleAddToCart()}
            aria-label="Add to the Cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
