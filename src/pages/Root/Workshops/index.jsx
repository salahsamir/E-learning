import { Box } from "@mui/material";
import Categories from "./components/Categories";
import WorkshopsList from "./components/WorkshopsList";
import Footer from "Components/Footer/Footer";
import { Helmet } from "react-helmet";

const Workshops = () => {
  return (
    <>
      <Helmet>
        <title>Workshops | Eduvation</title>
      </Helmet>
      <Box maxWidth="1440px" mx="auto">
        <Categories />
        <WorkshopsList />
        <Footer />
      </Box>
    </>
  );
};

export default Workshops;
