import { SentimentSatisfiedAlt } from "@mui/icons-material";
import { Box, alpha, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
const CustomerSatisfaction = () => {
  const theme = useTheme();

  const chartOptions = {
    series: [90],
    colors: [theme.palette.primary.main],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 15,
          size: "65%",
        },
        track: {
          background:
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[700],
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "14px",
            color: theme.palette.text.secondary,
            offsetY: 50,
          },
          value: {
            fontSize: "24px",
            show: true,
            color: theme.palette.text.primary,
            offsetY: -15,
          },
        },
      },
    },
    stroke: {
      lineCap: "butt",
    },
    fill: {
      colors: [theme.palette.primary.main],
      opacity: 1,
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.5,
        },
      },
    },
    labels: ["Students Satisfaction"],
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.b1",
        padding: "16px",
        borderRadius: "8px",
        // height: "300px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Chart
        type="radialBar"
        options={chartOptions}
        series={chartOptions.series}
        height={300}
      />
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "90px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px",
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
        }}
      >
        <SentimentSatisfiedAlt
          sx={{
            color: "primary.main",
            height: "24px",
            width: "24px",
            "& circle": {
              r: "1",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomerSatisfaction;
