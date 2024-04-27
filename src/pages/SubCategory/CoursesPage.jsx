import { Stack } from "@mui/material";
import React from "react";

import Cources from "../../Components/Subcategory/Cources.jsx";
import { useParams } from "react-router-dom";

export default function CoursesPage() {
  const {id}=useParams()

  return (
    <Stack  my={"5px"}>
     
      <Cources id={id}/>
    </Stack>
  );
}
