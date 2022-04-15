import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import React from "react";
import * as styled from "./Navbar.styled";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import { Cart } from "../../Pages/CartPage/Cart";

export const Navbar = () => {
  const redirectToHome = () => {
    window.location.replace('/');
  };
  return (
    <styled.Container>
      <styled.Wrapper>
        <styled.Left>
          <styled.SearchContainer>
            <styled.Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </styled.SearchContainer>
        </styled.Left>
        <styled.Center>
            <styled.Logo onClick={redirectToHome}>KAPPA</styled.Logo>
        </styled.Center>
        <styled.Right>
          <Link to="/register">
            <styled.MenuItem>Register</styled.MenuItem>
          </Link>
          <Link to="/login">
            <styled.MenuItem onClick={<Login />}>LogIn</styled.MenuItem>
          </Link>
          <styled.MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined onClick={<Cart />} />{" "}
              </Link>
            </Badge>
          </styled.MenuItem>
        </styled.Right>
      </styled.Wrapper>
    </styled.Container>
  );
};
