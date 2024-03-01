import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import React from "react";
import { Box } from "@mui/material";
import TopicItem from "./TopicItem";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import { BaseApi } from "util/BaseApi";

function TopicsList({ items, setItems, setRefetch }) {
  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
  ];
  const params = useGetParams();
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active, over);
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
    setItems((items) => {
      return arrayMove(items, activeIndex, overIndex);
    });
    axios
      .patch(
        BaseApi +
          `/course/${params[1]}/chapter/${params[0]}/curriculum/${active.id}`,
        {
          startPosition: String(activeIndex + 1),
          endPosition: String(overIndex + 1),
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {});
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25em",
          }}
        >
          {items.map((item) => (
            <TopicItem key={item.id} item={item} setRefetch={setRefetch} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default TopicsList;
