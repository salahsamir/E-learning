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
          {value}
        </Typography>
      </Box>
    </Grid2>
  );
};
const WorkshopFeatures = () => {
  return (
    <Grid2 container spacing={2} mt={"16px"}>
      <Grid2 xs={12}>
        <Typography variant="h6" color="text.primary">
          Features
        </Typography>
      </Grid2>
      <Item icon={<Event />} title={"Start Day"} value={"May, 28"} />
      <Item icon={<AccessTime />} title={"Duration"} value={"8 Weeks"} />
      <Item
        icon={<SignalCellularAltOutlined />}
        title={"Skill Level"}
        value={"Beginner"}
      />
      <Item icon={<VisibilityOutlined />} title={"Views"} value={"12,620"} />
    </Grid2>
  );
};

export default WorkshopFeatures;
