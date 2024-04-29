import { Box } from "@mui/material";
import Categories from "./components/Categories";
import WorkshopsList from "./components/WorkshopsList";
import Footer from "Components/Footer/Footer";

const Workshops = () => {
  return (
    <Box maxWidth="1440px" mx="auto">
      <Categories />
      <WorkshopsList />
      <Footer />
    </Box>
  );
};

export default Workshops;
