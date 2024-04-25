import { Paper } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList";

const Notifications = () => {
  return (
    <Paper
      sx={{
        width: { xs: "auto", sm: "400px" },
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Header />
      <NotificationsList />
    </Paper>
  );
};

export default Notifications;
