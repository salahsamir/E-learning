import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
const formatTime = (time) => {
  return time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
function IndicationCard({ eduRoom }) {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const createdAt = new Date(eduRoom?.createdAt);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const timePassed = currentTime - createdAt.getTime();
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.b1,
        height: "80px",
        borderRadius: "8px",
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box>
        <Typography variant="h6">{eduRoom?.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {createdAt?.toDateString().split(" ").slice(1, 4).join(" ")}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          Time Passed
        </Typography>
        <Typography variant="body1" textAlign="center" fontWeight="400">
          {`
            ${formatTime(Math.floor(timePassed / 1000 / 60 / 60))} :
            ${formatTime(Math.floor(timePassed / 1000 / 60) % 60)} :
            ${formatTime(Math.floor(timePassed / 1000) % 60)}
            `}
        </Typography>
      </Box>
    </Box>
  );
}

export default IndicationCard;
