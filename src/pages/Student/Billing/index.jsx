import { Box } from "@mui/material";
import React from "react";
import TransactionsTable from "./components/TransactionsTable";
import BalanceCard from "./components/BalanceCard";
import { useBilling } from "api/student/billing.tsx";
import { Helmet } from "react-helmet";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";

const Billing = () => {
  const { data: billing, isLoading, isError } = useBilling();
  console.log(billing);
  return (
    <>
      <Helmet>
        <title>Billing | Eduvation</title>
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorBox />
      ) : (
        <Box>
          <BalanceCard />
          <TransactionsTable transactions={billing.orders} />
        </Box>
      )}
    </>
  );
};

export default Billing;
