import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function IndicationCard({ icon, title, value }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        p: "10px",
        gap: "10px",
        backgroundColor: (theme) => theme.palette.background.b1,
        borderRadius: 2,
        minHeight: "80px",
      }}
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& svg": {
            width: "40px",
            height: "40px",
            color: (theme) => theme.palette.primary.main,
          },
        }}
      >
        {icon}
      </Box>
      <Divider orientation="vertical" flexItem />
      <Stack alignItems="center" width="50%">
        <Typography variant="body2" my="1em">
          {title}
        </Typography>
        <Typography fontWeight="600" mb="1em" variant="body1" component="p">
          {value}
        </Typography>
      </Stack>
    </Box>
  );
}

export default IndicationCard;
