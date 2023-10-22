import { CheckCircleRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

function SuccessBox() {
  return (
    <Stack
      width={"200px"}
      alignItems={"center"}
      height={"100%"}
      justifyContent={"center"}
    >
      <CheckCircleRounded
        color="primary"
        sx={{ height: "96px", width: "96px", marginY: 4 }}
      />
      <Typography variant="h4" fontWeight={600} marginY={1}>
        Successfully
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Your password has been updated
      </Typography>
    </Stack>
  );
}

export default SuccessBox;
