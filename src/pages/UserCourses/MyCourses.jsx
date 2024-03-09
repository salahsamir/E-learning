import {
  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import React, { useContext } from "react";
import { allContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
    let nav=useNavigate()
  let { course } = useContext(allContext);

  return (
    <Stack spacing={3} my={3} py={3}>
      <Container>
        <Typography variant="h3" color={"primary"} textAlign="center">
          My Courses
        </Typography>
        <div className="row py-2">
          {course?.map((item) => {
            return (
              <div className="col-sm-6 col-md-3">
                <Box sx={{ height: "280px" ,backgroundColor:"#090000"}}  display={"flex"} gap={2} my={2} flexDirection={"column"} justifyContent={"space-between"}>

                  <Avatar
                    src={item.coverImageUrl}
                    alt="img"
                    style={{ width: "100%",height: "140px" }}
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
  );
}