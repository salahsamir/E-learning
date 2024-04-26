import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SubCategory from "../../Components/Subcategory/SubCategory.jsx";
import Cources from "../../Components/Subcategory/Cources.jsx";

export default function CoursesPage() {
  const { id } = useParams();

  return (
    <Stack  my={"5px"}>
      {/* <SubCategory id={id} /> */}
      <Cources/>
    </Stack>
  );
}
