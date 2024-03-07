import { Box, Tab, Tabs, alpha } from "@mui/material";
import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Account from "./Account/Account";
const tabsNames = [
  "Profile",
  "Account",
  "Billing",
  "Notifications",
  "Privacy",
  "Delete Account",
];
const tabsComponents = {
  Profile: <Profile />,
  Account: <Account />,
  Billing: "",
  Notifications: "",
  Privacy: "",
  "Delete Account": "",
};
const UserInfo = () => {
  const [value, setValue] = useState("Profile");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        borderRadius: "4px",
        border: (theme) => `1px solid ${theme.palette.primary.border}`,
        backdropFilter: "blur(4px)",
        "& .MuiTabs-scroller": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        variant="scrollable"
        scrollButtons
        sx={{
          height: "80px",
          width: "100%",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          "& button": {
            textTransform: "none",
          },
        }}
      >
        {tabsNames.map((name) => (
          <Tab
            value={name}
            key={name}
            label={name}
            color="text.primary"
            disableFocusRipple
            disableRipple
            disableTouchRipple
          />
        ))}
      </Tabs>
      {tabsComponents[value]}
    </Box>
  );
};

export default UserInfo;
