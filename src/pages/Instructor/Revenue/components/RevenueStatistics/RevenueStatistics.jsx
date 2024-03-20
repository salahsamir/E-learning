import { Wallet } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Typography, alpha } from "@mui/material";
import React from "react";

const RevenueStatistics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: "16px",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "background.b1",
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box>
        <Typography color="text.secondary" variant="body2">
          Total Revenue
        </Typography>
        <Typography variant="h5" component="p" fontWeight="600">
          $1500
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
          display="flex"
          alignItems="center"
          gap="4px"
        >
          <Wallet
            sx={{
              color: "text.primary",
            }}
          />
          Total paid out amount is
          <Typography
            component="span"
            color="text.primary"
            fontWeight="600"
            variant="body2"
          >
            $200.21
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "16px",
          borderRadius: "8px",
          border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        }}
      >
        <Box>
          <Typography color="text.secondary" variant="body2">
            Current Balance
          </Typography>
          <Typography variant="h6" component="p" fontWeight="600">
            $1300
          </Typography>
        </Box>
        <Box>
          <LoadingButton variant="outlined">Withdraw</LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default RevenueStatistics;
