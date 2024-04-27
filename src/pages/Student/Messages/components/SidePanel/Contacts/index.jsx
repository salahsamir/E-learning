import { Box } from "@mui/system";
import React from "react";
import Contact from "./Contact";
import { useGetChats } from "api/global/messages.tsx";
import ContactSkeleton from "./ContactSkeleton";

const Contacts = () => {
  const { data: chats } = useGetChats();
  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {chats?.map((chat) => (
        <Contact key={chat._id} chat={chat} />
      ))}
      {!chats && (
        <>
          <ContactSkeleton />
          <ContactSkeleton />
          <ContactSkeleton />
        </>
      )}
    </Box>
  );
};

export default Contacts;
