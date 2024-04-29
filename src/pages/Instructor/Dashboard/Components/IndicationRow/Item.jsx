import { Box, Typography, alpha } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowOutward } from "@mui/icons-material";
const Item = ({ title, value, change, symbol }) => {
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
    <Box flex="1" display="flex" justifyContent="center">
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="600">
          {symbol}
          {valueCounter}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            sx={{
              borderRadius: "50%",
              border: `1px solid ${change > 0 ? "success.main" : "error.main"}`,
              transform: change > 0 ? "rotate(0deg)" : "rotate(90deg)",
              backgroundColor: (theme) =>
                change > 0
                  ? alpha(theme.palette.success.main, 0.2)
                  : alpha(theme.palette.error.main, 0.2),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
            }}
          >
            <ArrowOutward
              sx={{
                color: change > 0 ? "success.main" : "error.main",
                height: "16px",
                width: "16px",
              }}
            />
          </Box>
          <Typography
            variant="body2"
            color={change > 0 ? "success.main" : "error.main"}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
