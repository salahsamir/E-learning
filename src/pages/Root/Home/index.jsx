import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

const Home = () => {
  return (
    <Box
      sx={{
        userSelect: "none",
      }}
    >
      <Header />
      <HeroSection />
      <HeroSection />
    </Box>
  );
};

export default Home;
