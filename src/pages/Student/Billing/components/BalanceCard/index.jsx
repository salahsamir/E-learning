import { Wallet } from "@mui/icons-material";
import { Box, Typography, alpha } from "@mui/material";
import React from "react";
import { useGetRevenue } from "api/instructor/revenue.tsx";
import RedeemButton from "./RedeemButton";

const BalanceCard = () => {
  const { data: revenue } = useGetRevenue();
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
        mb: "16px",
      }}
    >
      <Box>
        <Typography color="text.secondary" variant="body2">
          Current Balance
        </Typography>
        <Typography variant="h5" component="p" fontWeight="600">
          {revenue?.totalRevenue || 0} EGP
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
          Total spent amount is
          <Typography
            component="span"
            color="text.primary"
            fontWeight="600"
            variant="body2"
          >
            5000 EGP
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
            Your Points
          </Typography>
          <Typography variant="h6" component="p" fontWeight="600">
            5000
          </Typography>
        </Box>
        <Box>
          <RedeemButton points={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default BalanceCard;
