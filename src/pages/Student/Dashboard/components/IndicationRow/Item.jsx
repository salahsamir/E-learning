import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";

const Item = ({ icon, title, value, color }) => {
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
    <Grid2 xs={12} sm={6} lg={3}>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          backgroundColor: "background.b1",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            height: "64px",
            width: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
            borderRadius: "4px",
            color: "white",
            svg: {
              height: "36px",
              width: "36px",
            },
          }}
        >
          {icon}
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            component="p"
            fontWeight="800"
          >
            {valueCounter}
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default Item;
