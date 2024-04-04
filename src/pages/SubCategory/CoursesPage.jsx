import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SubCategory from "../../Components/Subcategory/SubCategory.jsx";

export default function CoursesPage() {
  const { id } = useParams();

  return (
    <Stack spacing={4} my={"10px"}>
      <SubCategory id={id} />
    </Stack>
  );
}
