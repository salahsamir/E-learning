import React from "react";
import { Helmet } from "react-helmet";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SalesChart from "./Components/SalesChart/SalesChart";
import IndicationRow from "./Components/IndicationRow/IndicationRow";
import CustomerSatisfaction from "./Components/CustomerSatisfaction/CustomerSatisfaction";
import DevicesChart from "./Components/DevicesChart/DevicesChart";
import { useGetAnalysis } from "api/instructor/analysis.tsx";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";

function Dashboard() {
  const { data: analysis, isLoading, isError } = useGetAnalysis();
  return (
    <>
      <Helmet>
        <title>Dashboard | Eduvation</title>
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorBox />
      ) : (
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <IndicationRow analysis={analysis} />
          </Grid2>
          <Grid2 xs={12} md={8}>
            <SalesChart data={analysis.salesCountPerDay} />
          </Grid2>
          <Grid2
            xs={12}
            md={4}
            display="flex"
            gap="16px"
            flexDirection="column"
          >
            <CustomerSatisfaction percentage={analysis.satifactionPercentage} />
            <DevicesChart usage={analysis.devicesUsage} />
          </Grid2>
        </Grid2>
      )}
    </>
  );
}

export default Dashboard;
