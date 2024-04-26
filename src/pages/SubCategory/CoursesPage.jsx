import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SubCategory from "../../Components/Subcategory/SubCategory.jsx";
<<<<<<< HEAD
import Cources from "../../Components/Subcategory/Cources.jsx";
=======
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757

export default function CoursesPage() {
  const { id } = useParams();

  return (
<<<<<<< HEAD
    <Stack  my={"5px"}>
      {/* <SubCategory id={id} /> */}
      <Cources/>
=======
    <Stack spacing={4} my={"10px"}>
      <SubCategory id={id} />
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
    </Stack>
  );
}
