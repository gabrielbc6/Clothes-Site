import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Header } from '../atoms/Header';
import { Footer } from '../atoms/Footer';
import { CardList } from "../molecules/CardList";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
};

export { HomePage };
