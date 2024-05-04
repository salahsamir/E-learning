import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Item from "./Item";
import {
  EmojiEventsOutlined,
  ScheduleOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

const IndicationRow = () => {
  return (
    <Grid2 container spacing={2}>
      <Item
        icon={<SchoolOutlined />}
        title="Completed"
        value={16}
        color="#53a7ca"
      />
      <Item
        color="#da4949"
        title="In progress"
        value={7}
        icon={<ScheduleOutlined />}
      />
      <Item
        color="#dab149"
        title="Points"
        value={100}
        icon={<EmojiEventsOutlined />}
      />
      <Item
        color="#76885b"
        title="Certificates"
        value={10}
        icon={<WorkspacePremiumOutlined />}
      />
    </Grid2>
  );
};

export default IndicationRow;
