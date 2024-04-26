import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Error401() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  if (count === 0) {
    navigate("/signin");
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="calc(100vh - 86px)"
      p="2em"
    >
      <Typography variant="body1" textAlign="center">
        You must sign to continue <br />
        you will be redirected to sign in page in <br />
      </Typography>
      <Typography variant="h6" textAlign="center" color="primary">
        {count}
      </Typography>
    </Box>
  );
}

export default Error401;
