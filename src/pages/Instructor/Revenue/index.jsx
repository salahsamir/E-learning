import { Box } from "@mui/material";
import React from "react";
import RevenueStatistics from "./components/RevenueStatistics/RevenueStatistics";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RevenueChart from "./components/RevenueChart/RevenueChart";
import RevenueSummary from "./components/RevenueSummary/RevenueSummary";

const Revenue = () => {
  return (
    <Box>
      <RevenueStatistics />
      <Grid2 container spacing={3} mt="16px">
        <Grid2 xs={12} md={8}>
          <RevenueChart />
        </Grid2>
        <Grid2 xs={12} md={4}>
          <RevenueSummary />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Revenue;
