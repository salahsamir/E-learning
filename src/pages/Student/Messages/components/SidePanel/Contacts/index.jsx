import { Box } from "@mui/system";
import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  const contactsList = [
    {
      id: 1,
      name: "John Doe",
      message: "Hello",
      avatar: "https://i.pravatar.cc/301",
    },
    {
      id: 2,
      name: "Jane Doe",
      message: "Hi",
      avatar: "https://i.pravatar.cc/302",
    },
    {
      id: 3,
      name: "John Smith",
      message: "Hey",
      avatar: "https://i.pravatar.cc/303",
    },
    {
      id: 4,
      name: "Jane Smith",
      message: "Hola",
      avatar: "https://i.pravatar.cc/304",
    },
    {
      id: 5,
      name: "John Doe",
      message: "Hello",
      avatar: "https://i.pravatar.cc/305",
    },
    {
      id: 6,
      name: "Jane Doe",
      message: "Hi",
      avatar: "https://i.pravatar.cc/306",
    },
    {
      id: 7,
      name: "John Smith",
      message: "Hey",
      avatar: "https://i.pravatar.cc/307",
    },
    {
      id: 8,
      name: "Jane Smith",
      message: "Hola",
      avatar: "https://i.pravatar.cc/308",
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100px",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {contactsList.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </Box>
  );
};

export default Contacts;
