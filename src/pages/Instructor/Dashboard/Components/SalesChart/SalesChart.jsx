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
    dataLabels: {
      style: {
        colors: [muitheme.palette.primary.main],
      },
    },
    markers: {
      colors: [muitheme.palette.primary.main],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        endingShape: "rounded",
      },
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 2,
      curve: "smooth",
      color: "#FF1654",
      lineCap: "round",
    },
    xaxis: {
      categories: monthsNames,
    },
  };
  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.primary.border}`,
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: (theme) => theme.palette.background.b1,
        "& .apexcharts-text": {
          fill: (theme) => theme.palette.text.primary,
        },
        "& .apexcharts-gridline": {
          stroke: (theme) => theme.palette.background.border,
          strokeWidth: 1,
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
