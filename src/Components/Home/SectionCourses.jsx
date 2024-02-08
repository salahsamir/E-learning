import {
  Avatar,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SectionCourses() {
  const dummyCourses = [
    {
      title: "React complete Course",
      image:
        " https://t4.ftcdn.net/jpg/03/16/92/19/240_F_316921905_DA6fqEqymTryAhXM8YxO6oB2gnQE5Dl9.jpg",
      category: "Programming",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 1,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://t3.ftcdn.net/jpg/02/29/67/16/240_F_229671671_ShmpKTX7o2Y9hzKgCeIMfPKjwgjYVGqn.jpg",
      category: "Merkting",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 2,
      favorite: true,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://t4.ftcdn.net/jpg/03/01/56/97/240_F_301569770_amUEVvMSnA5P3KKJ1ShHfyva9GCua9k1.jpg",
      category: "Decoration",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://t3.ftcdn.net/jpg/01/68/53/48/240_F_168534871_l0FhfVTn4ElqlBlZuFJJctpXTE4iMZex.jpg",
      category: "Design",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://t3.ftcdn.net/jpg/03/32/31/82/240_F_332318217_uuf0o4tJHlO5t81CDYbyfVH1FF53jEnT.jpg",
      category: "Kitchen",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://t3.ftcdn.net/jpg/03/05/20/00/240_F_305200081_zx1hF4YDlnbBLRx1BnW6JXopgELK9xEy.jpg",
      category: "Health & Fitness",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Stack m={"10px"} spacing={1} pb={4}>
        <Typography
          variant="h1"
          py={2}
          data-aos="zoom-in"
          color={"primary"}
          textAlign={"center"}
        >
          Explore all courses
        </Typography>
        <Divider color={"yellow"}></Divider>
        <Grid container spacing={1}>
          {dummyCourses.map((ele, index) => (
            <>
              <Grid
                item
                sm={6}
                xs={6}
                md={4}
                key={index}
                data-aos="zoom-in-down"
              >
                <Avatar
                  variant="rounded"
                  src={ele.image}
                  sx={{
                    height: "200px",
                    width: "90%",
                    margin: "auto",
                    backgroundPosition: "cenetr",
                    backgroundSize: "cover",
                  }}
                />
                <Typography textAlign={"center"} color={"secondary"} py={"10px"} variant="h5">
                  {ele.category}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>

        <Divider>
          <Button variant="contained"></Button>
        </Divider>
      </Stack>
    </>
  );
}
