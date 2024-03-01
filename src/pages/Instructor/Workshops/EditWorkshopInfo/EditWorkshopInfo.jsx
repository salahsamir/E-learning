import React from "react";
import EditWorkshopForm from "../Components/EditWorkshopForm/EditWorkshopForm";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useGetData from "hooks/useGetData";
import ErrorPage from "pages/Instructor/Error";

function EditWorkshopInfo() {
  const location = useLocation();
  const pathList = location.pathname.split("/");
  const workshopId = pathList[pathList.length - 2];
  const {
    data: workshop,
    loading: loadingWorkshop,
    error: errorWorkshop,
  } = useGetData("workshop/" + workshopId);
  if (errorWorkshop?.response?.status < 500) {
    return <ErrorPage error={errorWorkshop} redirectTo="/instructor/courses" />;
  }
  return (
    <Box pb="1em">
      {loadingWorkshop ? (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      ) : (
        <EditWorkshopForm workshop={workshop.results} />
      )}
    </Box>
  );
}

export default EditWorkshopInfo;
