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
import React from "react";
import Slider from "react-slick";
import SectionCourses from "./SectionCourses.jsx";
import StarIcon from "@mui/icons-material/Star";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <Container>
      <Stack m={"20px"} spacing={1} py={4}>
        <Typography
          data-aos="zoom-in"
          variant="h2"
          color={"primary"}
          textAlign={"center"}
        >
          Who are we{" "}
        </Typography>
        <Divider color={"yellow"}></Divider>
        <Grid spacing={3} container>
          <Grid item sm={6}>
            <Stack
              justifyContent={"center"}
              sx={{ width: "90%", height: "100%" }}
              data-aos="fade-right"
              color='secondary.main'
            >
              <Typography variant="h6">
             <Typography fontWeight={'bold'} variant="h5"> Our Vision</Typography>
We envision a future where education is not confined to traditional boundaries but extends beyond classrooms, reaching every corner of the globe. We believe in a world where learning is personalized, inclusive.
<Typography fontWeight={'bold'} variant="h5">Our Mission</Typography>

Our mission is to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity.
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Avatar
              data-aos="fade-left"
              variant="rounded"
              sx={{ width: "90%", height: "100%" }}
              alt="Remy Sharp"
              src="https://pinlearn.com/wp-content/uploads/2020/11/Group-Webinar-Class-1536x946.png"
            />
          </Grid>
        </Grid>
      </Stack>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      <SectionCourses />
      <Stack mx={"10px"} spacing={1} pb={"20px"}>
        <Typography
          textAlign={"center"}
          data-aos="zoom-in"
          variant="h2"
          color="primary"
        >
          Step by step with you
        </Typography>
        <Divider color={"yellow"}></Divider>

        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box width={"95%"} data-aos="zoom-in-right">
              <CircularProgressWithLabel color="secondary" value={"1"} />

              <Avatar
                variant="rounded"
                sx={{ width: "100%", height: "50%" }}
                src="https://t3.ftcdn.net/jpg/03/70/47/40/240_F_370474000_Ie0F7Piq7uBYXrrEz2UuaPAQuFeNix8r.jpg"
              />
              <Typography variant="body" color="secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aliquid dolore placeat? Alias tempora distinctio exercitationem
                dignissimos eos sit ratione.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Box width={"95%"} data-aos="zoom-in">
              <CircularProgressWithLabel color="secondary" value={"2"} />

              <Avatar
                variant="rounded"
                sx={{ width: "100%", height: "50%" }}
                src="https://t3.ftcdn.net/jpg/03/46/14/92/240_F_346149288_n1vwzR3hrrpr7eoyHQe6vhlwCuvTi7jL.jpg"
              />
              <Typography variant="body" color="secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aliquid dolore placeat? Alias tempora distinctio exercitationem
                dignissimos eos sit ratione.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Box width={"95%"} data-aos="zoom-in-left">
              <CircularProgressWithLabel color="secondary" value={"3"} />

              <Avatar
                variant="rounded"
                sx={{ width: "100%", height: "50%" }}
                src="https://t4.ftcdn.net/jpg/03/73/34/59/240_F_373345944_fBsiOQneRX06wr7vrTwaIJjq7i9RPOhv.jpg"
              />
              <Typography variant="body" color="secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aliquid dolore placeat? Alias tempora distinctio exercitationem
                dignissimos eos sit ratione.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>
      <Stack mx={"10px"} spacing={1} pb={"20px"}>
        <Typography
          data-aos="zoom-in"
          textAlign={"center"}
          variant="h2"
          color={"primary"}
        >
          Dedicated Mentorship
        </Typography>
        <Divider color={"yellow"}></Divider>
        <Stack spacing={3} p={"20px"} m={"30px"} textAlign={"center"}>
         <div className="row">
          <div className="col-md-4 my-1">
          <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                height="194"
                image="https://t4.ftcdn.net/jpg/04/83/72/03/240_F_483720331_euzEQRP2Qd33TTk4mQqunpIIHRyMKIQJ.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  salah
                </Typography>
                <Typography variant="body2" color="secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook
                </Typography>
              </CardContent>
            </Card>
          
          </div>
          <div className="col-md-4 my-1">
          <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                height="194"
                image="https://t4.ftcdn.net/jpg/04/83/72/03/240_F_483720331_euzEQRP2Qd33TTk4mQqunpIIHRyMKIQJ.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  salah
                </Typography>
                <Typography variant="body2" color="secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook
                </Typography>
              </CardContent>
            </Card>

         </div>
         <div className="col-md-4 my-1">
          <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                height="194"
                image="https://t4.ftcdn.net/jpg/04/83/72/03/240_F_483720331_euzEQRP2Qd33TTk4mQqunpIIHRyMKIQJ.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  salah
                </Typography>
                <Typography variant="body2" color="secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook
                </Typography>
              </CardContent>
            </Card>
            
         </div>
         </div>
        </Stack>
      </Stack>
      <Divider>
        <Button variant="contained"></Button>
      </Divider>

      <Stack m={"20px"}  p={"50px"}>
        
          
            <div className="row">
               <div className="col-md-4 py-3  d-flex align-items-center">
         <div className=" ">
         <Typography color='primary' variant="h3">Testimonials</Typography>
              <Typography variant="h6">
              <span style={{ color: "yellow" }}>
                <StarIcon />
              </span>{" "}
              course rating
            </Typography>
         </div>
              </div>
              <div className="col-md-4 py-3  text-center">
              <Avatar
              sx={{ width: "50%", height: "50%", m: "auto" }}
              src="https://t3.ftcdn.net/jpg/04/17/45/82/240_F_417458226_vV0392LwESBo3qTSj1mA5Wyd7TAj5w0q.jpg"
            />

            <Typography variant="h4" py={"5px"}>
              Eslam
            </Typography>
            <Typography color={'secondary'}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ut voluptate fugiat similique dolor accusantium rerum{" "}
            </Typography>
            <Rating name="read-only" value={5} readOnly />
              </div>
              <div className="col-md-4 py-3 text-center">
              <Avatar
              sx={{ width: "50%", height: "50%", m: "auto" }}
              src="https://t4.ftcdn.net/jpg/01/36/68/49/240_F_136684951_y3qIuZC8YTjUCPOPvR4jv7Z24p52dt6S.jpg"
            />

            <Typography variant="h4" py={"5px"}>
              Layla
            </Typography>
            <Typography color={'secondary'}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ut voluptate fugiat similique dolor accusantium rerum
            </Typography>
        
            <Rating name="read-only" value={5} readOnly />
              </div>
            </div>
          
          
       
        
          
      </Stack>

      <Divider>
        <Button variant="contained"></Button>
      </Divider>
    </Container>
  );
}
