import { DeleteForever } from "@mui/icons-material";
import { Box, IconButton, Typography, alpha } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const AttachedItem = ({ item }) => {
  return (
    <Grid2 xs={12} sm={6} display="flex" gap="8px" alignItems="center">
      <Box
        sx={{
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.25),
          borderRadius: "50%",
          border: (theme) => `1px solid ${theme.palette.primary.main}`,
          color: "primary.main",
        }}
      >
        {item.type}
      </Box>
      <Box flex="1">
        <Typography
          component={"a"}
          color="text.primary"
          href="/"
          target="_blank"
          sx={{
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {item.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {item.size}
        </Typography>
      </Box>
      <IconButton
        sx={{
          color: "text.main",
          transition: "color 0.3s",
          padding: "4px",
          "&:hover": {
            color: "error.main",
          },
        }}
      >
        <DeleteForever fontSize="small" />
      </IconButton>
    </Grid2>
  );
};

export default AttachedItem;
