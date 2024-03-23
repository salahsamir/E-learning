import { Wallet } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Typography, alpha } from "@mui/material";
import React, { useState } from "react";
import CashoutDialog from "./CashoutDialog";
import { useGetRevenue } from "api/instructor/revenue.tsx";
import toast from "react-hot-toast";

const RevenueStatistics = () => {
  const [dialogOpened, setDialogOpened] = useState(false);
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
      }}
    >
      <Box>
        <Typography color="text.secondary" variant="body2">
          Total Revenue
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
          Total paid out amount is
          <Typography
            component="span"
            color="text.primary"
            fontWeight="600"
            variant="body2"
          >
            {revenue?.totalPaidOut || 0} EGP
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
            {revenue?.currentBalance || 0} EGP
          </Typography>
        </Box>
        <Box>
          <LoadingButton
            variant="outlined"
            onClick={() => {
              if (+revenue?.currentBalance < 200) {
                toast.error("Minimum amount to withdraw is 200 EGP");
                return;
              }
              setDialogOpened(true);
            }}
          >
            Withdraw
          </LoadingButton>
        </Box>
      </Box>
      <CashoutDialog
        open={dialogOpened}
        setOpen={setDialogOpened}
        balance={revenue?.currentBalance || 0}
      />
    </Box>
  );
};

export default RevenueStatistics;
