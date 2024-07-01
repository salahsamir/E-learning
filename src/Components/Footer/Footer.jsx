import { Link, Stack, Typography } from "@mui/material";
import React from "react";
// Import CSS file for footer styles

export default function Footer() {
  return (
    <Stack
      width={"100%"}
      // height={'100%'}
      position={"relative"}
      spacing={3}
      my={"10px"}
      textAlign={"center"}
      py={"10px"}
      className="footer"
    >
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="primary" to="/">
          Eduvation
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Stack>
  );
}
