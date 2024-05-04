import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
const getLast7days = () => {
  const days = Array.from({ length: 7 }).map((ele, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date.toLocaleString("en-us", {
      weekday: "long",
    });
  });
  days.reverse();
  return days;
};
const getLast7daysSales = (data) => {
  const sales = Array.from({ length: 7 }).map((ele, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return data[date.getDate()] || 0;
  });
  sales.reverse();
  return sales;
};
function StudyStatics({ data }) {
  const sales = getLast7daysSales(data);
  const muitheme = useTheme();
  const series = [
    {
      name: "Study Hours",
      data: sales,
    },
  ];
  const options = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: window.innerWidth > 515 ? 10 : 4,
      },
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
      categories: getLast7days(),
      axisBorder: {
        color: muitheme.palette.grey[500],
        strokeWidth: 4,
      },
      axisTicks: {
        color: muitheme.palette.grey[500],
      },
      labels: {
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
        formatter: (val) => {
          return val + "h";
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
  return (
    <Box
      sx={{
        height: "100%",
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
          <Typography variant="h6" fontWeight="400">
            Study Statics
          </Typography>
        </Box>
      </Box>
      <Chart series={series} type="bar" options={options} height={"246px"} />
    </Box>
  );
}

export default StudyStatics;
