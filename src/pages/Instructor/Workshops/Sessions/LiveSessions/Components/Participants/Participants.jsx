import { useParticipants } from "@livekit/components-react";
import React from "react";

function Participants() {
  const participants = useParticipants();
  participants.forEach((participant) => {
    console.log("participant:", participant);
  });
  return <div>Participants</div>;
}

export default Participants;
