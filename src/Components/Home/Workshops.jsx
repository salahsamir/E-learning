import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Workshops = () => {
  return (
    <Box my="3em">
      <div className="flex justify-between items-center">
        <Typography
          color="text.primary"
          variant="h4"
          fontWeight="500"
          className="text-2xl font-bold tracking-tight sm:text-1xl"
        >
          Top Workshops
        </Typography>
        <Button variant="outlined" LinkComponent={Link} to={"/workshops"}>
          View All
        </Button>
      </div>{" "}
    </Box>
  );
};

export default Workshops;
