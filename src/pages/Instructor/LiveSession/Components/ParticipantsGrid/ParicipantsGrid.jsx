import { useEffect, useRef, useState } from "react";
import MemberCard from "./MemberCard";
import { Box } from "@mui/material";
import { useParticipants } from "@livekit/components-react";

const calc_dimensions = (total_items, containerRef) => {
  let columns = Math.ceil(total_items ** 0.5);
  let rows = Math.round(total_items ** 0.5);
  let possibleColumns = 1;
  let possibleRows = 1;
  let maxPossibleColumns = 1;
  let maxPossibleRows = 1;
  let maxItems = 1;
  maxPossibleColumns = Math.ceil(
    (containerRef.current?.offsetWidth || 100) / 100
  );
  maxPossibleRows = Math.ceil(
    (containerRef.current?.offsetHeight || 100) / 100
  );
  possibleColumns = Math.min(maxPossibleColumns, columns);
  possibleRows = Math.min(maxPossibleRows, rows);
  maxItems = possibleColumns * possibleRows;
  return {
    possibleColumns,
    possibleRows,
    maxItems,
  };
};
function ParticipantsGrid() {
  const containerRef = useRef(null);
  const currentParticipants = useParticipants();
  const [containerProp, setContainerProp] = useState({
    possibleColumns: 1,
    possibleRows: 1,
    maxItems: 1,
  });
  useEffect(() => {
    setContainerProp(calc_dimensions(currentParticipants.length, containerRef));
    window.addEventListener("resize", () => {
      setContainerProp(
        calc_dimensions(currentParticipants.length, containerRef)
      );
    });
    return () => {
      window.removeEventListener("resize", () => {
        setContainerProp(
          calc_dimensions(currentParticipants.length, containerRef)
        );
      });
    };
  }, [containerRef, currentParticipants.length]);

  const cards = [];
  currentParticipants.every((participant) => {
    cards.push(<MemberCard key={participant.sid} participant={participant} />);
    if (cards.length >= containerProp.maxItems) {
      return false;
    }
    return true;
  });

  return (
    <Box
      ref={containerRef}
      display={"grid"}
      gridTemplateColumns={`repeat(${containerProp.possibleColumns}, 1fr)`}
      gridTemplateRows={`repeat(${containerProp.possibleRows}, 1fr)`}
      gap={2}
      overflow={"hidden"}
      sx={{ height: "100%", width: "100%", backgroundColor: "background.b1" }}
    >
      {cards}
    </Box>
  );
}

export default ParticipantsGrid;
