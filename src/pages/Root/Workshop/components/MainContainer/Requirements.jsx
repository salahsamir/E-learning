import { Check } from "@mui/icons-material";
import { Box, List, Typography } from "@mui/material";
import React from "react";

const Requirement = ({ text }) => {
  return (
    <Box
      component="li"
      color="text.secondary"
      sx={{
        display: "flex",
        alignItems: "center",
        pl: "8px",
        gap: "8px",
      }}
    >
      <Check fontSize="small" />
      <Typography variant="subtitle1" fontSize="18px">
        {text}
      </Typography>
    </Box>
  );
};
const Requirements = ({ requirements }) => {
  return (
    <Box mt="16px">
      <Typography variant="h6" color="text.primary">
        Requirements
      </Typography>
      <List>
        {requirements.map((ele, index) => (
          <Requirement text={ele} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default Requirements;
