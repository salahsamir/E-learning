import { Box, Typography, Button } from "@mui/material";
import React from "react";

const LatestTransactions = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-05-05",
      amount: 100,
      status: "pending",
    },
    {
      id: 2,
      date: "2024-05-01",
      amount: 200,
      status: "completed",
    },
    {
      id: 3,
      date: "2024-04-30",
      amount: 300,
      status: "pending",
    },
    {
      id: 4,
      date: "2024-04-20",
      amount: 400,
      status: "error",
    },
  ];
  const statusColor = (status) => {
    if (status === "pending") return "warning.main";
    if (status === "completed") return "success.main";
    return "error.main";
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.b1",
        padding: "16px",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        minHeight: "200px",
      }}
    >
      <Typography variant="h6" mb="8px">
        Latest Transactions
      </Typography>
      <Box display="flex" flexDirection="column" gap="8px">
        {transactions.map(
          (transaction, index) =>
            index < 4 && (
              <Box
                key={transaction.id}
                display="flex"
                justifyContent="space-between"
                gap="16px"
              >
                <Box>
                  <Typography variant="body1" fontWeight="600">
                    {transaction.amount} EGP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {transaction.date}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  fontWeight="600"
                  color={statusColor(transaction.status)}
                  textTransform="capitalize"
                >
                  {transaction.status}
                </Typography>
              </Box>
            )
        )}
        {transactions.length >= 4 && (
          <Button variant="contained" color="primary">
            View All
          </Button>
        )}
        {transactions.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            No transactions yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default LatestTransactions;
