import { DeleteForever } from "@mui/icons-material";
import { Box, IconButton, Typography, alpha } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDeleteAttachedFile } from "api/instructor/topics.tsx";
import React from "react";

const AttachedItem = ({ item }) => {
  const { mutate: deleteFile, isPending } = useDeleteAttachedFile();
  const handleDelete = () => {
    deleteFile({
      resourceId: item._id,
    });
  };
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
          textTransform: "uppercase",
        }}
      >
        {item.title.split(".").pop()}
      </Box>
      <Box
        flex="1"
        overflow="hidden"
        flexShrink={10}
        textOverflow="ellipsis"
        minWidth="0px"
        whiteSpace="nowrap"
      >
        <Typography
          component={"a"}
          color="text.primary"
          noWrap
          href={item.url}
          target="_blank"
          sx={{
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {item.title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {(+item.size / (1024 * 1024)).toLocaleString("en-us", {
            maximumFractionDigits: 2,
            style: "unit",
            unit: "megabyte",
          })}
        </Typography>
      </Box>
      <IconButton
        aria-label="delete attached file"
        disabled={isPending}
        onClick={handleDelete}
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
