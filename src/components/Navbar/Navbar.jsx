import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import logo from "../../assets/logo.png";

const Navbar = ({ totalItems }) => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="Cockasian.js" height="50px" />
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge
              badgeContent={totalItems}
              color="secondary"
              variant="standard"
            >
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
