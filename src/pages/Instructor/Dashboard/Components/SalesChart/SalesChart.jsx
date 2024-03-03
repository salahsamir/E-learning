import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function SalesChart() {
  const muitheme = useTheme();
  const [choosenYear, setChoosenYear] = React.useState("2024");
  const series = [
    {
      name: "total sales",
      data: [10, 20, 25, 30, 40, 50],
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
        borderRadius: 4,
        borderRadiusApplication: "end",
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
      categories: monthsNames,
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
        border: (theme) => `1px solid ${theme.palette.primary.border}`,
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
          <Typography variant="h6">Sales</Typography>
          <Typography variant="body2" color="text.secondary">
            +30% than last month
          </Typography>
        </Box>
        <Select
          sx={{ height: 30 }}
          id="choosenYear"
          value={choosenYear}
          onChange={(event) => setChoosenYear(event.target.value)}
          label="Year"
        >
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
        </Select>
      </Box>
      <Chart series={series} type="bar" options={options} height={"300px"} />
    </Box>
  );
}

export default SalesChart;
