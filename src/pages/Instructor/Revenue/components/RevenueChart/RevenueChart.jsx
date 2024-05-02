import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import Chart from "react-apexcharts";

const getLast30days = () => {
  const days = Array.from({ length: 30 }).map((ele, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date.toLocaleString("en-us", {
      month: "short",
      day: "2-digit",
    });
  });
  days.reverse();
  return days;
};
const getLast30daysSales = (data) => {
  const sales = Array.from({ length: 30 }).map((ele, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return data[date.getDate()] || 0;
  });
  sales.reverse();
  return sales;
};

function RevenueChart({ revenueArray }) {
  const muitheme = useTheme();

  const series = [
    {
      name: "total revenue",
      data: getLast30daysSales(revenueArray),
    },
  ];
  const options = useMemo(() => {
    return {
      chart: {
        id: "sales-chart",
        toolbar: {
          show: false,
        },
      },
      colors: [muitheme.palette.primary.main],

      markers: {
        colors: [muitheme.palette.primary.main],
      },
      fill: {
        opacity: 1,
        colors: [muitheme.palette.primary.main],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        curve: "smooth",
        color: "#FF1654",
        lineCap: "round",
      },
      xaxis: {
        categories: getLast30days(),
        sorted: true,
        axisBorder: {
          color: muitheme.palette.grey[500],
          strokeWidth: 4,
        },
        axisTicks: {
          color: muitheme.palette.grey[500],
        },
        labels: {
          rotate: 0,
          style: {
            colors: muitheme.palette.text.secondary,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: muitheme.palette.text.secondary,
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.5,
          },
        },
      },
      grid: {
        borderColor: muitheme.palette.primary.border,
        strokeDashArray: 2,
      },
      labels: {
        style: {
          colors: muitheme.palette.text.primary,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "none",
        style: {
          fontSize: "12px",
        },
        items: {
          display: "flex",
        },
        cssClass: "apexcharts-tooltip",
        marker: {
          show: true,
        },
      },
    };
  }, [
    muitheme.palette.grey,
    muitheme.palette.primary.border,
    muitheme.palette.primary.main,
    muitheme.palette.text.primary,
    muitheme.palette.text.secondary,
  ]);
  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: (theme) => theme.palette.background.b1,
        "& .apexcharts-tooltip": {
          backgroundColor: (theme) => theme.palette.background.b1,
          color: (theme) => theme.palette.text.primary,
          border: (theme) => `1px solid ${theme.palette.primary.border}`,
          boxShadow: "none",
        },
        " .apexcharts-tooltip-title": {
          borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" maxHeight={"400px"}>
        <Box>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="body2" color="text.secondary">
            last 30 days revenue
          </Typography>
        </Box>
      </Box>
      <Chart series={series} type="area" options={options} height={"300px"} />
    </Box>
  );
}

export default RevenueChart;
