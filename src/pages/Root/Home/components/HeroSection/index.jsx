import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./HeroSection.css";
import Logo from "assets/images/logo.png";
import Hero from "assets/images/hero.png";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const benefitsList = [
  "Engage in real-time with experts through our live workshops",
  "Get access to hundreds of courses in different fields",
  "Seamless collaboration in focus groups",
  "Earn points for active participation",
];
const HeroSection = () => {
  return (
    <Box
      sx={{ backgroundColor: "#38386a", pt: "2em", pb: "1em" }}
      color="white"
    >
      <Box className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-6 flex justify-between items-center flex-col lg:flex-row">
        <Box py="1em">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: "2em",
            }}
          >
            <img
              src={Logo}
              alt=""
              style={{
                height: "48px",
                width: "48px",
              }}
            />
            <Typography variant="h4" fontWeight="800">
              Eduvation
            </Typography>
          </Box>
          <Typography variant="h4" fontWeight="800" mb="0.5em">
            Unlock Your Potential
          </Typography>
          <Typography maxWidth="500px" variant="subtitle1" fontWeight="500">
            Empowering education through innovative technology. Eduvation is the
            ultimate platform for your learning journey.
          </Typography>
          <Box component="ul" my="1.5em">
            {benefitsList.map((item, index) => (
              <Box
                component="li"
                className="flex gap-2 items-center"
                key={"benefit" + index}
              >
                <CheckCircle color="primary" />
                <Typography variant="subtitle1" fontWeight="500">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Button variant="contained" LinkComponent={Link} to="/course">
            Start Now
          </Button>
        </Box>
        <Box className="hidden lg:flex">
          <img src={Hero} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
