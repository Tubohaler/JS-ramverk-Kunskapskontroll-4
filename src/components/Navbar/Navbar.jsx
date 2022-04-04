import React from "react";
import { Link } from "react-router-dom";
import { authState } from "../../recoil/auth/atom";
import { useRecoilValue } from "recoil";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import logo from "../../assets/logo.png";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };








  
const Navbar = ({ totalItems }) => {
  const auth = useRecoilValue(authState);
  console.log(auth);
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          {auth.token ? <Link to="/profile">Profile</Link> : null}
          {auth.user.role === "admin" ? <Link to="/admin">Admin</Link> : null}
          <Link to="/register">Register</Link>
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
