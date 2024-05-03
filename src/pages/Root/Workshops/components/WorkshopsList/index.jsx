import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import WorkshopCard from "../WorkshopCard";
import { useGetWorkshops } from "api/global/workshops.tsx";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import ErrorBox from "Components/ErrorBox";

const WorkshopsList = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { data, isLoading, isError } = useGetWorkshops({
    categoryId: currentCategory === "all" ? undefined : currentCategory,
  });
  const workshops = data?.pages.flatMap((ele) => ele) || [];
  console.log(workshops);
  return (
    <Grid2 container padding="16px" spacing={2}>
      {isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8].map((ele) => (
          <Grid2 key={ele} xs={12} sm={6} md={4} lg={3}>
            <Skeleton
              animation="wave"
              sx={{
                height: "321px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                transform: "none",
              }}
            />
          </Grid2>
        ))}
      {!isLoading && isError && (
        <Grid2 xs={12}>
          <ErrorBox />
        </Grid2>
      )}
      {workshops.map((workshop) => (
        <Grid2 xs={12} sm={6} md={4} lg={3} key={workshop._id}>
          <WorkshopCard workshop={workshop} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default WorkshopsList;
