import { Box } from "@mui/material";
import React from "react";
import TransactionsTable from "./components/TransactionsTable";
import BalanceCard from "./components/BalanceCard";

const Billing = () => {
  return (
    <Box>
      <BalanceCard />
      <TransactionsTable />
    </Box>
  );
};

export default Billing;
