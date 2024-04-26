import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const CountriesChart = () => {
  const theme = useTheme();
  const options = {
    series: [67, 13, 20, 40, 14, 48],
    labels: ["Egypt", "USA", "Germany", "India", "China", "Others"],
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    colors: ["#DAB149", "#DA4949", "#53A7CA", "#76885b", "#673f69", "#7e6363"],
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
      show: false,
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
          text: "Top Countries",
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
        height="280"
      />
    </Box>
  );
};

export default CountriesChart;
