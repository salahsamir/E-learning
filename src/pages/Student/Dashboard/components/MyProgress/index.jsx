import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
const MyProgress = ({ status }) => {
  let allEqualZero = true;
  const usageArray = status.map((ele) => {
    if (ele.usagePercentage > 0) allEqualZero = false;
    return ele.usagePercentage;
  });
  const theme = useTheme();

  const options = {
    series: allEqualZero ? [1, 3, 6] : usageArray,
    labels: ["Completed", "In Progress", "Not Started"],
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
          labels: {
            show: true,
            name: { show: false },
            total: {
              showAlways: true,
              show: true,
              color: "#fff",
              fontSize: "16px",
            },
            value: {
              show: true,
              color: "#fff",
            },
          },
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
      position: "right",
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
      points: [{}],
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.b1",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h6" color="text.primary" fontWeight="400">
        My Progress
      </Typography>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="100%"
        height="300px"
      />
    </Box>
  );
};

export default MyProgress;
