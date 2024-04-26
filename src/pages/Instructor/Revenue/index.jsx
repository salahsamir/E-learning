import { Box } from "@mui/material";
import React from "react";
import RevenueStatistics from "./components/RevenueStatistics/RevenueStatistics";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RevenueChart from "./components/RevenueChart/RevenueChart";
import CoursesRevenue from "./components/CoursesRevenue/CoursesRevenue";
import LatestTransactions from "./components/LatestTransactions/LatestTransactions";
import CountriesChart from "./components/CountriesChart/CountriesChart";
import SuccessfulOrders from "./components/SuccessfulOrders/SuccessfulOrders";

const Revenue = () => {
  return (
    <Box>
      <RevenueStatistics />
      <Grid2 container spacing={"16px"} mt="8px">
        <Grid2 xs={12} md={8} display="flex" flexDirection="column" gap="16px">
          <RevenueChart />
          <CoursesRevenue />
        </Grid2>
        <Grid2 xs={12} md={4} display="flex" flexDirection="column" gap="16px">
          <SuccessfulOrders />
          <SuccessfulOrders />
          <LatestTransactions />
          <CountriesChart />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Revenue;
