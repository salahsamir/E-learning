import {
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
  Rating,
  Container,
} from "@mui/material";
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import React from "react";
import Slider from "react-slick";
import SectionCourses from "./SectionCourses.jsx";
import StarIcon from "@mui/icons-material/Star";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhoSection from "./WhoSection.jsx";
import Blog from "./Blog.jsx";
import Leader from "./Leader.jsx";
import Recomandtions from "./Recomenadtion.jsx";
function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
        display: "inline-flex",
        padding: "20px",
      }}
    >
      <CircularProgress variant="determinate" size={90} value={"100%"} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="text.secondary">
          {props.value}
        </Typography>
      </Box>
    </Box>
  );
}
var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};
export default function Sections() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <Container py={4} my={5}>
    <WhoSection/>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      {/* <SectionCourses /> */}
      
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      {/* <Recomandtions/> */}
      {/* <Divider>
        <Button variant="contained"></Button>
      </Divider>
      <SectionCourses/> */}
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      <Leader/>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>  
      <Blog/>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
    </Container>
  );
}
