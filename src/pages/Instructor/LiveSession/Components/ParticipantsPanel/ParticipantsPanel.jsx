import { useParticipants } from "@livekit/components-react";
import React from "react";
import ParticipantCard from "./ParticipantCard";
import { Box } from "@mui/material";

function ParticipantsPanel() {
  const participants = useParticipants();
  let cards = [];
  participants.forEach((participant) => {
    cards.push(
      <ParticipantCard key={"pp" + participant.sid} participant={participant} />
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {cards}
    </Box>
  );
}

export default ParticipantsPanel;
