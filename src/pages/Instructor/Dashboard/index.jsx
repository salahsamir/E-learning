import React from "react";
import { Helmet } from "react-helmet";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SalesChart from "./Components/SalesChart/SalesChart";
import IndicationRow from "./Components/IndicationRow/IndicationRow";
import CustomerSatisfaction from "./Components/CustomerSatisfaction/CustomerSatisfaction";
import DevicesChart from "./Components/DevicesChart/DevicesChart";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Eduvation</title>
      </Helmet>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <IndicationRow />
        </Grid2>
        <Grid2 xs={12} md={8}>
          <SalesChart />
        </Grid2>
        <Grid2 xs={12} md={4} display="flex" gap="16px" flexDirection="column">
          <CustomerSatisfaction />
          <DevicesChart />
        </Grid2>
      </Grid2>
    </>
  );
}

export default Dashboard;
