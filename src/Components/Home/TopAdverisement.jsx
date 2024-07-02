import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const TopAdverisement = () => {
  const [showAd, setShowAd] = useState(true);
  return (
    <Box
      className="flex items-center justify-center min-h-12 relative"
      sx={{ backgroundColor: (theme) => theme.palette.primary[600], px: "1em" }}
      style={{ display: showAd ? "flex" : "none" }}
    >
      <Typography color="white" mr="32px">
        Use this coupon <span className="font-extrabold">GHTRAX</span> to get
        20% in your first purchase
      </Typography>
      <IconButton
        onClick={() => setShowAd(false)}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          p: "4px",
        }}
      >
        <Close sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default TopAdverisement;
