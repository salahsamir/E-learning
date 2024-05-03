import { Box, Divider } from "@mui/material";
import React from "react";
import Item from "./Item";

const IndicationRow = ({ analysis }) => {
  const { totalStudents, totalViews, watchedHours, totalRevenue } = analysis;
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.b1",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "16px",
        padding: "16px",
        // flexDirection: { xs: "column", sm: "row" },
        gap: 1,
      }}
    >
      <Box
        flex={1}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={1}
      >
        <Item title="Total Students" value={totalStudents || 0} change={100} />
        <ResponsiveDivider
          horizontal={{ xs: "flex", md: "none" }}
          vertical={{ xs: "none", md: "flex" }}
        />
        <Item title="Total Views" value={totalViews || 0} change={100} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        flex={1}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={1}
      >
        <Item title="Watched Hours" value={watchedHours || 0} change={100} />
        <ResponsiveDivider
          horizontal={{ xs: "flex", md: "none" }}
          vertical={{ xs: "none", md: "flex" }}
        />
        <Item
          title="Total Revenue"
          value={totalRevenue || 0}
          symbol={" EGP "}
          change={100}
        />
      </Box>
    </Box>
  );
};

export default IndicationRow;

function ResponsiveDivider({ vertical, horizontal }) {
  return (
    <>
      <Divider flexItem sx={{ display: horizontal }} />
      <Divider orientation="vertical" flexItem sx={{ display: vertical }} />
    </>
  );
}
