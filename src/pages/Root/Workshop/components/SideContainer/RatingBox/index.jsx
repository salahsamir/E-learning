import { Box, Rating, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as StarEmoj } from "assets/svg/star-emoj.svg";
const RatingBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "background.b1",
      }}
    >
      <SvgIcon
        sx={{
          height: "100px",
          width: "100px",
        }}
      >
        <StarEmoj height="100%" />
      </SvgIcon>
      <Box flex="1" display="flex" flexDirection="column" gap="8px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="600">
            Rating
          </Typography>
          <Rating defaultValue={3.8} precision={0.2} readOnly />
        </Box>
        <Box
          color="text.secondary"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2">2,453 Students</Typography>
          <Typography variant="body2">3.8 (880 ratings)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RatingBox;
