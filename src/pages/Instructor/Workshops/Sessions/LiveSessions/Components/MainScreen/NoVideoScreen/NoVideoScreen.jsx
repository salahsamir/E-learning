import React, { useCallback, useState } from "react";
import MemberCard from "./MemberCard";
import { Box } from "@mui/material";
import { GridLayout } from "@livekit/components-react";
const count = 50;
/*
n =>   colums,rows
3 =>   2,2
4 =>   2,2
5 =>   3,2
6 =>   3,2
7 =>   3,3
8 =>   3,3
9 =>   3,3
*/
const calc_dimensions = (total_items, containerRef) => {
  let columns = Math.ceil(total_items ** 0.5);
  let rows = Math.round(total_items ** 0.5);
  let possibleColumns = 1;
  let possibleRows = 1;
  let maxPossibleColumns = 1;
  let maxPossibleRows = 1;
  let maxItems = 1;
  maxPossibleColumns = Math.ceil(
    containerRef.current?.offsetWidth || 100 / 100
  );
  maxPossibleRows = Math.ceil(containerRef.current?.offsetHeight || 100 / 100);
  possibleColumns = Math.min(maxPossibleColumns, columns);
  possibleRows = Math.min(maxPossibleRows, rows);
  maxItems = possibleColumns * possibleRows;
  console.log({ possibleColumns, possibleRows, maxItems });
  return {
    possibleColumns,
    possibleRows,
    maxItems,
    maxPossibleColumns,
    maxPossibleRows,
  };
};
function NoVideoScreen() {
  const containerRef = React.useRef(null);
  const count = 5;
  // React.useEffect(() => {
  //   setContainerProp(calc_dimensions(count, containerRef));
  // }, []);
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(<MemberCard key={`card ${i}`} />);
  }
  // window.addEventListener("resize", () => {
  //   setContainerProp(calc_dimensions(count, containerRef));
  // });
  return (
    <Box
      ref={containerRef}
      display={"grid"}
      gridTemplateColumns={`repeat(auto-fill, minmax(100px, 1fr))`}
      gridTemplateRows={`repeat(auto-fill, minmax(100px, 1fr))`}
      gap={2}
      overflow={"hidden"}
      sx={{ height: "100%", width: "100%", backgroundColor: "background.b1" }}
    >
      {cards}
    </Box>
  );
}

export default NoVideoScreen;
