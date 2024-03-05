import React from "react";
import EditWorkshopForm from "../Components/EditWorkshopForm/EditWorkshopForm";
import { Box, Typography } from "@mui/material";
import ErrorPage from "pages/Instructor/Error";
import { useGetWorkshop } from "api/instructor/workshops.tsx";
import useGetParams from "hooks/useGetParams";

function EditWorkshopInfo() {
  const params = useGetParams();
  const {
    data: workshop,
    loading: workshopLoading,
    error: workshopError,
  } = useGetWorkshop(params[1]);
  if (workshopError?.response?.status < 500) {
    return <ErrorPage error={workshopError} redirectTo="/instructor/courses" />;
  }
  return (
    <Box pb="1em">
      {workshopLoading ? (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      ) : (
        <EditWorkshopForm workshop={workshop} />
      )}
    </Box>
  );
}

export default EditWorkshopInfo;
