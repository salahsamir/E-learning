import { Box } from "@mui/system";
import React from "react";
import SearchButton from "./SearchButton";
import Contacts from "./Contacts";
import Header from "./Header";

const SidePanel = () => {
  return (
    <Box
      sx={{
        borderRight: (theme) => ({
          xs: "none",
          sm: `1px solid ${theme.palette.divider}`,
        }),
        padding: "16px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Header />
      <SearchButton />
      <Contacts />
    </Box>
  );
};

export default SidePanel;
