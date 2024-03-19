import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import Chart from "react-apexcharts";

const get_last_month_days = () => {
  let result = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateArr = d.toString().split(" ");
    result.push(dateArr[0] + " " + dateArr[2]);
  }
  return result;
};
const get_last_12_months = () => {
  let result = [];
  for (let i = 0; i < 12; i++) {
    let d = new Date();
    d.setMonth(d.getMonth() - i);
    const dateArr = d.toString().split(" ");
    result.push(dateArr[1] + " " + dateArr[3]);
  }
  return result;
};
function RevenueChart() {
  const muitheme = useTheme();
  const [choosenYear, setChoosenYear] = React.useState("last-week");
  let currentData = [10, 20, 25, 30, 40, 50];

  let xCateg;
  switch (choosenYear) {
    case "last-week":
      currentData = [10, 20, 25, 30, 40, 50, 20];
      xCateg = get_last_month_days().slice(0, 7).reverse();
      break;
    case "last-month":
      currentData = [
        54, 89, 22, 117, 96, 15, 73, 42, 106, 11, 67, 30, 80, 45, 110, 61, 10,
        99, 35, 75, 51, 114, 7, 69, 28, 83, 58, 23, 109, 40,
      ];
      xCateg = get_last_month_days();
      break;
    case "last-6-months":
      xCateg = get_last_12_months().slice(0, 6).reverse();
      currentData = [10, 20, 20, 30, 40, 10];
      break;
    case "last-year":
      xCateg = get_last_12_months();
      currentData = [10, 20, 25, 30, 40, 50, 20, 5, 5, 25, 10, 100];
      break;
    default:
      break;
  }
  const series = [
    {
      name: "total sales",
      data: currentData,
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
        categories: xCateg,
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
    xCateg,
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
          <MenuItem value="last-week">Last 7 days</MenuItem>
          <MenuItem value="last-month">last month</MenuItem>
          <MenuItem value="last-6-months">last 6 months</MenuItem>
          <MenuItem value="last-year">last year</MenuItem>
        </Select>
      </Box>
      <Chart series={series} type="area" options={options} height={"300px"} />
    </Box>
  );
}

export default RevenueChart;
