import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section2() {
  let nav = useNavigate();
  const dummyCourses = [
    {
      title: "React",
      image:
        " https://t3.ftcdn.net/jpg/03/58/10/00/240_F_358100067_PiL60gfwQAi4qBrNQE8Kiqa9cRzVNUYd.jpg",
      category: "Programming",
      price: 40,
      rating: 4.5,
      instructorName: "Salah",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 1,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React",
      image:
        " https://t3.ftcdn.net/jpg/03/58/10/00/240_F_358100067_PiL60gfwQAi4qBrNQE8Kiqa9cRzVNUYd.jpg",
      category: "Merkting",
      price: 40,
      rating: 4.5,
      instructorName: "salah",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 2,
      favorite: true,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React",
      image:
        " https://t3.ftcdn.net/jpg/03/58/10/00/240_F_358100067_PiL60gfwQAi4qBrNQE8Kiqa9cRzVNUYd.jpg",
      category: "Decoration",
      price: 40,
      rating: 4.5,
      instructorName: "eslam",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React",
      image:
        " https://t3.ftcdn.net/jpg/03/58/10/00/240_F_358100067_PiL60gfwQAi4qBrNQE8Kiqa9cRzVNUYd.jpg",
      category: "Design",
      price: 40,
      rating: 4.5,
      instructorName: "eslam",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React",
      image:
        " https://t3.ftcdn.net/jpg/03/58/10/00/240_F_358100067_PiL60gfwQAi4qBrNQE8Kiqa9cRzVNUYd.jpg",
      category: "Kitchen",
      price: 40,
      rating: 4.5,
      instructorName: "eslam",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
    {
      title: "React",
      image:
        "https://t3.ftcdn.net/jpg/03/05/20/00/240_F_305200081_zx1hF4YDlnbBLRx1BnW6JXopgELK9xEy.jpg",
      category: "Health & Fitness",
      price: 40,
      rating: 4.5,
      instructorName: "eslam",
      instructorImg:
        "https://t4.ftcdn.net/jpg/00/88/42/23/240_F_88422399_zwVPDSdxZwanMKeYkuOz5msQwJDam6hb.jpg",
      instructorJob: "Web Developer",
      id: 3,

      reviewersCount: 20,
      videosCount: 120,
      duration: { hours: 20, minutes: 30 },
    },
  ];
  return (
    <Stack spacing={3} >
      <Grid container spacing={3}>
        {dummyCourses.map((ele, index) => (
          <Grid
            item
            sm={6}
            xs={6}
            md={4}
            p={"10px"}
            key={index}
            data-aos="zoom-in-down"
            background={"#fff"}

          >
            <Box onClick={() => nav("/video")}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  variant="rounded"
                  src={ele.image}
                  sx={{
                    height: "200px",
                    width: "100%",
                    backgroundSize: "cover",
                    borderTopLeftRadius: '30%'
                  }}
                />
                <Avatar
                  src={ele.instructorImg}
                  sx={{
                    backgroundSize: "cover",
                    height: "25%",
                    width: "20%",
                    position: "absolute", left: "10px", top: "90%"
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ position: "absolute", right: "10px", top: "100%"}}>{ele.instructorName}</Typography>
           
              
              </Box>
              <Stack direction={'row'} justifyContent={'space-between'} pt={"35px"}>
                <Typography variant="h5" color='primary'>{ele.title}</Typography>
               <Box display={"flex"}>
               <Rating value={ele.rating} size="small" precision={0.5}/>
                <Typography>{ele.rating}</Typography></Box>
                </Stack>  
                <Typography  py={"10px"} color="text.secondary">Chapter :15</Typography>
                <Stack direction={'row'} py={"10px"} justifyContent={'space-between'}>
                  <Button variant="contained">BestSeller</Button>
                <Typography sx={{color:"yellow"}}>{ele.price}$</Typography>
    
                </Stack>      
              
            </Box>
            <Divider color={"yellow"}></Divider>
          </Grid>

        ))}
      </Grid>
    </Stack>
  );
}
