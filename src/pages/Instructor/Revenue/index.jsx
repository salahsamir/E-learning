import { Box } from "@mui/material";
import React from "react";
import RevenueStatistics from "./components/RevenueStatistics/RevenueStatistics";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RevenueChart from "./components/RevenueChart/RevenueChart";
import CoursesRevenue from "./components/CoursesRevenue/CoursesRevenue";
import LatestTransactions from "./components/LatestTransactions/LatestTransactions";
import CountriesChart from "./components/CountriesChart/CountriesChart";
import SuccessfulOrders from "./components/SuccessfulOrders/SuccessfulOrders";
import { useGetRevenue } from "api/instructor/revenue.tsx";
import { Helmet } from "react-helmet";
import ErrorBox from "Components/ErrorBox";
import LoadingSpinner from "Components/LoadingSpinner";
import TotalSales from "./components/TotalSales";

const Revenue = () => {
  const { data: revenue, isLoading, isError } = useGetRevenue();
  return (
    <>
      <Helmet>
        <title>Revenue | Eduvation</title>
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorBox />
      ) : (
        <Box>
          <RevenueStatistics />
          <Grid2 container spacing={"16px"} mt="8px">
            <Grid2
              xs={12}
              md={8}
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <RevenueChart revenueArray={revenue.revenuePerDay || {}} />
              <CoursesRevenue />
            </Grid2>
            <Grid2
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <TotalSales value={revenue.totalNumberOfStudents || 0} />
              <SuccessfulOrders percentage={revenue.successRate || 0} />
              <LatestTransactions transactions={revenue.transactions} />
              <CountriesChart />
            </Grid2>
          </Grid2>
        </Box>
      )}
    </>
  );
};

export default Revenue;
