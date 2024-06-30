import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      left="0"
      top="0"
      width="100%"
      zIndex={10}
      p="16px"
    >
      <Typography
        variant="h4"
        fontWeight="600"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2.125rem" },
        }}
      >
        Eduvation
      </Typography>
      <Box display="flex" alignItems="center">
        <Button>Signin</Button>
        <Button>Signup</Button>
      </Box>
    </Box>
  );
};

export default Header;
