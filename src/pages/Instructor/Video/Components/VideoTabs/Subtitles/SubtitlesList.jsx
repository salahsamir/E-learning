import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useDeleteVideoSubtitle } from "api/instructor/video.tsx";
import React from "react";

const Item = ({ item }) => {
  const { mutate: deleteSubtitle, isPending } = useDeleteVideoSubtitle();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        border: "1px solid",
        borderColor: "primary.main",
        padding: "8px 16px",
        borderRadius: "100px",
      }}
    >
      <Typography variant="body1" color="primary.main" fontWeight="600">
        {item.language}
      </Typography>
      <LoadingButton
        loading={isPending}
        onClick={() => {
          deleteSubtitle({
            subtitleId: item._id,
          });
        }}
        sx={{
          minWidth: 0,
          padding: 0,
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          "&:hover": {
            color: "error.main",
          },
        }}
      >
        <Close fontSize="small" />
      </LoadingButton>
    </Box>
  );
};
const SubtitlesList = ({ subtitles }) => {
  return (
    <Box
      sx={{
        mt: "16px",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {subtitles.map((ele) => (
        <Item key={ele._id} item={ele} />
      ))}
    </Box>
  );
};

export default SubtitlesList;
