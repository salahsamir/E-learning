import React from "react";
import { Helmet } from "react-helmet";
import IndicationCard from "./Components/IndicationCard/IndicationCard";
import { AttachMoney, Groups, QueryBuilder } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import WelcomeCard from "./Components/WelcomeCard/WelcomeCard";
import NewsCarousel from "./Components/NewsCarousel/NewsCarousel";
import SalesChart from "./Components/SalesChart/SalesChart";
function Dashboard() {
  const sliderItems = [
    {
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1297517/REDESIGN-ReactNativePerformance-Luke_Social-2d4e17555bff22e44357e1311f309dba.png",
      title: "React complete Course",
      description:
        "Learn React from scratch to advanced level with this course",
    },
    {
      img: "https://kinsta.com/wp-content/uploads/2021/05/what-is-node-js-featured-image.jpg",
      title: "React complete Course",
      description:
        "Learn React from scratch to advanced level with this course",
    },
    {
      img: "https://user-images.githubusercontent.com/37103237/152671482-885fd940-f4ea-4fb6-8baf-816c17b541d7.png",
      title: "React complete Course",
      description:
        "Learn React from scratch to advanced level with this course",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Dashboard | Eduvation</title>
      </Helmet>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={8}>
          <WelcomeCard />
        </Grid2>
        <Grid2 xs={12} md={4}>
          <NewsCarousel items={sliderItems} height="290px" />
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <IndicationCard
            icon={<Groups />}
            title={"Number of students"}
            value={"350"}
          />
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <IndicationCard
            icon={<AttachMoney />}
            title={"Total Revenue"}
            value={"4200$"}
          />
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <IndicationCard
            icon={<QueryBuilder />}
            title={"Watching Hours"}
            value={"120"}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <SalesChart />
        </Grid2>
      </Grid2>
    </>
  );
}

export default Dashboard;
