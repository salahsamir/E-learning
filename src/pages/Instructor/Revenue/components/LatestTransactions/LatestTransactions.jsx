import { Box, Typography, Button } from "@mui/material";
import React from "react";

const LatestTransactions = ({ transactions }) => {
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
                    {(+transaction.amount).toLocaleString("en-us", {
                      notation: "compact",
                      maximumFractionDigits: 2,
                    })}{" "}
                    EGP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(+transaction.date).toLocaleString("en-us", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  fontWeight="600"
                  color={statusColor("completed")}
                  textTransform="capitalize"
                >
                  Completed
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
