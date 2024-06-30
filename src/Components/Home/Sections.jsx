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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhoSection from "./WhoSection.jsx";
import Blog from "./Blog.jsx";
import Leader from "./Leader.jsx";
import Recomandtions from "./Recomenadtion.jsx";
import WorkshopItem from "./Workshop.tsx";
export default function Sections() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Container py={4} my={5}>
    <WhoSection/>
      {localStorage.getItem('token')?
      
      
      <>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      
      <Recomandtions/>
      </>
      :""

      }
    
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
    

    < WorkshopItem/>
      
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
