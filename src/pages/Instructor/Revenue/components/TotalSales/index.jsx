import { ShowChartOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const TotalSales = ({ value }) => {
  const [valueCounter, setValueCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValueCounter((prev) => {
        if (prev < value) {
          const newVal = Math.ceil(prev + value / 50);
          if (newVal >= value) return value;
          return newVal;
        }
        return value;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [value]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        backgroundColor: "background.b1",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Box
        sx={{
          height: "64px",
          width: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#76885b",
          borderRadius: "4px",
          color: "white",
          svg: {
            height: "36px",
            width: "36px",
          },
        }}
      >
        <ShowChartOutlined />
      </Box>
      <Box display="flex" flexDirection="column" gap="8px">
        <Typography variant="body2" color="text.secondary">
          Total Sales
        </Typography>
        <Typography
          variant="h5"
          color="text.primary"
          component="p"
          fontWeight="600"
        >
          {valueCounter}
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalSales;
