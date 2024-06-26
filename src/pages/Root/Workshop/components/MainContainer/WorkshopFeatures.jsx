import {
  AccessTime,
  Event,
  SignalCellularAltOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const Item = ({ icon, title, value }) => {
  return (
    <Grid2 xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          backgroundColor: "background.b1",
          padding: "16px",
          borderRadius: "16px",
          svg: {
            height: "18px",
            width: "18px",
          },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {icon}
          {value || "unkown"}
        </Typography>
      </Box>
    </Grid2>
  );
};
const WorkshopFeatures = ({ workshop }) => {
  return (
    <Grid2 container spacing={2} my={"16px"}>
      <Grid2 xs={12}>
        <Typography variant="h6" color="text.primary">
          Features
        </Typography>
      </Grid2>
      <Item
        icon={<Event />}
        title={"Start Day"}
        value={new Date(workshop.startDay)
          .toLocaleString("en-us", {
            month: "short",
            day: "2-digit",
          })
          .split(" ")
          .join(", ")}
      />
      <Item
        icon={<AccessTime />}
        title={"Duration"}
        value={workshop.durationInWeek + " weeks"}
      />
      <Item
        icon={<SignalCellularAltOutlined />}
        title={"Skill Level"}
        value={workshop.level}
      />
      <Item
        icon={<VisibilityOutlined />}
        title={"Views"}
        value={workshop.views}
      />
    </Grid2>
  );
};

export default WorkshopFeatures;
