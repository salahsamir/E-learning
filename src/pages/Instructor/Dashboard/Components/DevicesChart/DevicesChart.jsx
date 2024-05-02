import { Box, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
const DevicesChart = ({ usage }) => {
  let allEqualZero = true;
  const usageArray = usage.map((ele) => {
    if (ele.usagePercentage > 0) allEqualZero = false;
    return ele.usagePercentage;
  });
  const theme = useTheme();

  const options = {
    series: allEqualZero ? [100 / 3, 100 / 3, 100 / 3] : usageArray,
    labels: ["Computer", "Tablet", "Mobile"],
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    colors: ["#DAB149", "#DA4949", "#53A7CA"],
    stroke: {
      colors: [theme.palette.background.paper],
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      style: {
        fontSize: "10px",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: theme.palette.text.primary,
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.7,
        },
      },
    },
    annotations: {
      texts: [
        {
          text: "Devices",
          x: "50%",
          y: "50%",
          textAnchor: "middle",
          foreColor: theme.palette.text.primary,
          fontSize: "16px",
          fontWeight: "600",
        },
      ],
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.b1",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height="300px"
      />
    </Box>
  );
};

export default DevicesChart;
