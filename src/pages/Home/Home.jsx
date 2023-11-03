import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import { Stack } from "@mui/material";
import CourseCard from "../../Components/CourseCardLong/CourseCardLong";
import Slider from "../../UI/Slider/Slider";
export default function Home() {
  const dummyCourses = [
    {
      title: "React complete Course",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Web Development",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 1,
      rating: 4.7,
      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Web Development",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 2,
      favorite: true,
      rating: 2.4,
      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React complete Course",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Web Development",
      price: 40,
      rating: 4.5,
      instructorName: "Salah Eddine",
      instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
      instructorJob: "Web Developer",
      id: 3,
      rating: 3.5,
      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
  ];
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
      <TopBar display={{ xs: "none", sm: "flex" }} />
      <Stack
        pt={{ xs: 0, sm: "40px" }}
        gap={4}
        direction={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Slider
          height={{ xs: "300px", sm: "calc(100vh - 100px)" }}
          width="100%"
          interval={5000}
          items={sliderItems}
          itemWidth="100vw"
          autoPlay={true}
          showArrows={true}
          showIndicators={true}
        />
        {dummyCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </Stack>
    </>
  );
}
