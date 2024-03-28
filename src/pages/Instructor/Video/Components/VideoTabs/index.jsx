import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DetailsTab from "./Details";
import Attached from "./Attached";

const VideoTabs = ({ video }) => {
  const [currentTab, setCurrentTab] = useState("Details");
  const tabs = {
    Details: <DetailsTab video={video} />,
    Questions: "Questions",
    Comments: "Comments",
    Attached: <Attached />,
    Subtitles: "Subtitles",
  };
  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderTop: "none",
        width: "100%",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        "& .MuiTabs-scroller": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Tabs
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          width: "100%",
        }}
        value={currentTab}
        onChange={(_, newValue) => setCurrentTab(newValue)}
        variant="scrollable"
      >
        {Object.keys(tabs).map((tab) => (
          <Tab label={tab} key={tab} value={tab} />
        ))}
      </Tabs>
      <Box p="1em">{tabs[currentTab]}</Box>
    </Box>
  );
};

export default VideoTabs;
