import { QuestionMark, StarBorderOutlined } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";

const SuccessfulOrders = () => {
  const percentage = 70;
  return (
    <Box
      sx={{
        padding: "1em",
        borderRadius: "8px",
        backgroundColor: "background.b1",
        display: "flex",
        gap: "1em",
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={percentage}
          thickness={1.5}
          size={60}
          sx={{
            color: "success.main",
          }}
        />
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.success.main, 0.1),
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StarBorderOutlined color="success" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" flex="1">
        <Box>
          <Typography variant="h6" color="success.main" fontWeight="600">
            {percentage}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Successful Orders
          </Typography>
        </Box>
        <Tooltip title="the orders that havn't been refunded ">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.200",
            }}
          >
            <QuestionMark
              sx={{
                color: "text.disabled",
                height: "18px",
                width: "18px",
              }}
            />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SuccessfulOrders;
