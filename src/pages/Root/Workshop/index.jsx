import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SideContainer from "./components/SideContainer";
import MainContainer from "./components/MainContainer";
import useGetParams from "hooks/useGetParams";
import { useGetWorkshop } from "api/global/workshops.tsx";
import { Helmet } from "react-helmet";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";
import Footer from "Components/Footer/Footer";

const Workshop = () => {
  const params = useGetParams();
  const {
    data: workshop,
    isLoading,
    isError,
  } = useGetWorkshop({ workshopId: params[0] });
  return (
    <>
      <Helmet>
        <title>{workshop?.title || "workshop"} | Eduvation</title>
      </Helmet>
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Grid2
          container
          flexDirection={{ xs: "column-reverse", sm: "row-reverse" }}
          padding="16px"
          spacing={4}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : isError ? (
            <ErrorBox />
          ) : (
            <>
              <Grid2 xs={12} sm={5} md={4}>
                <SideContainer workshop={workshop} />
              </Grid2>
              <Grid2 xs={12} sm={7} md={8}>
                <MainContainer workshop={workshop || {}} />
              </Grid2>
            </>
          )}
        </Grid2>
        <Footer />
      </Box>
    </>
  );
};

export default Workshop;
