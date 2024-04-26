import React from "react";
import { ReactComponent } from "./assets/error404.svg";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Error404({ redirectTo }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="calc(100vh - 86px)"
      p="2em"
    >
      <ReactComponent />
      <Button
        LinkComponent={Link}
        to={redirectTo}
        variant="contained"
        color="primary"
      >
        Go back
      </Button>
    </Box>
  );
}

export default Error404;
