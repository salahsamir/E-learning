import { Box, Typography } from "@mui/material";
import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        background: "linear-gradient(45deg,#04293d,#020a0e)",
        backgroundSize: "200% 200%",
        display: "flex",
        animation: "gradient 7s  ease infinite",
        "::before": {
          content: '""',
          height: "100%",
          width: "100%",
          position: "absolute",
          background: "linear-gradient(70deg, #1e6a93, #020a0e)",
          animation: "gradient 3s  ease infinite",

          opacity: "0.3",
        },
      }}
    >
      <Box
        position="relative"
        zIndex="2"
        flex="1"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box maxWidth="600px" textAlign="center">
          <Typography
            variant="h3"
            color="white"
            fontWeight="600"
            sx={{
              letterSpacing: "-0.1px",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            {"The one place, you need for all your learning"
              .split("")
              .map((word, index) => (
                <Box
                  key={index}
                  sx={{
                    animation: "animate-hero-text 70ms ease forwards",
                    animationDelay: `${index * 70}ms`,
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  component="span"
                >
                  {word}
                </Box>
              ))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
