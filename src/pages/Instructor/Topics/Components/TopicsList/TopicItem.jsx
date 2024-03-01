import { useSortable } from "@dnd-kit/sortable";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import styled from "@emotion/styled";
import { DragIndicator, MoreVert } from "@mui/icons-material";
import TopicMenu from "../TopicMenu/TopicMenu";

const ChapterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.b1,
  paddingLeft: "0.5em",
}));

function TopicItem({ item, setRefetch }) {
  console.log(item);
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Box>
        <ChapterWrapper>
          <Box display="flex" alignItems="center" gap="8px">
            <DragIndicator sx={{ "&:hover": { cursor: "grab" } }} />
            <Typography variant="body1" component="p">
              <Link to={`${item.type}/${item.id}`}>{item.title}</Link>
            </Typography>
          </Box>
          <Box mr="4px">
            <TopicMenu
              id={item.id}
              setRefetch={setRefetch}
              topicType={item.type}
            />
          </Box>
        </ChapterWrapper>
      </Box>
    </Box>
  );
}

export default TopicItem;
