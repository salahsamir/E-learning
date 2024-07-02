import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SidePanel from "./components/SidePanel";
import MessagesBox from "./components/MessagesBox";
import useGetParams from "hooks/useGetParams";
import { useCheckNewMessages } from "api/socket/chat.tsx";
import { Helmet } from "react-helmet";

const Messages = () => {
  const params = useGetParams();
  const chatSelected = params[0] !== "messages";
  useCheckNewMessages();
  return (
    <>
      <Helmet>
        <title>Messages | Eduvation</title>
      </Helmet>
      <Grid2
        container
        sx={{
          backgroundColor: (theme) => theme.palette.background.b1,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: "16px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Grid2
          xs={12}
          sm={4}
          maxHeight="100%"
          display={{ xs: chatSelected ? "none" : "block", sm: "block" }}
        >
          <SidePanel />
        </Grid2>
        <Grid2
          xs={12}
          sm={8}
          maxHeight="100%"
          display={{ xs: chatSelected ? "block" : "none", sm: "block" }}
        >
          <MessagesBox />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Messages;
