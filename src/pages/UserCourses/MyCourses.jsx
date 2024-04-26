import {
<<<<<<< HEAD
  Typography
=======
  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Box,
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
} from "@mui/material";
import React, { useContext } from "react";
import { allContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
    let nav=useNavigate()
  let { course } = useContext(allContext);
<<<<<<< HEAD
 

  return (
    <div className="container">
       <Typography variant="h3" py={3} color={"primary"} textAlign="center">
          My Courses
        </Typography>
        <div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
              <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {course.map((ele) => (
                  <div key={ele._id} onClick={() => nav(`/Chapter/${ele._id}`)} className='group relative' >
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                      <img src={ele.coverImageUrl} alt={ele.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <Typography color='primary'>{ele.title}</Typography>
                        </h3>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
=======

  return (
    <Stack spacing={3}  py={3}>
      <Container>
        <Typography variant="h3" color={"primary"} textAlign="center">
          My Courses
        </Typography>
        <div className="row py-2">
          {course?.map((item) => {
            return (
              <div className="col-sm-6 col-md-3" onClick={() => nav(`/Chapter/${item._id}`)}>
                <Box sx={{ height: "280px"}}  display={"flex"} gap={2} my={2} flexDirection={"column"} justifyContent={"space-between"}>

                  <Avatar
                    src={item.coverImageUrl}
                    alt="img"
                    style={{ width: "100%",height: "200px" }}
                    variant="rounded"
                  />
                  <Typography px={2} variant="p">{item.title}</Typography>
                  <Button size="medium" gutterBottom variant="contained" className="w-100 fs-5 " onClick={() => nav(`/Chapter/${item._id}`)}>Show Course</Button>


                </Box>
             
              </div>
            );
          })}
        </div>
      </Container>
    </Stack>
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
  );
}