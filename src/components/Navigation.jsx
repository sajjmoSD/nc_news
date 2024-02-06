import { Link } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/articles" color="inherit">
          Articles
        </Button>
        <Button component={Link} to="/users" color="inherit">
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
}
