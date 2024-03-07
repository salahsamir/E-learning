import {
  Typography,
  Stack,
  Container,
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActions,
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
              <div className="col-sm-4 col-md-3">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.coverImageUrl}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                     {item.tags?item.tags.map((tag)=>{return <span className="badge rounded-pill mx-1 p-1" style={{background:"#007D53"}}>{tag}</span>}):""}
                    <Typography variant="body2" color="secondary">
                     {/* {item.subtitle} */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained" className="w-100 fs-5" onClick={() => nav( `/Chapter/${item._id}`)} >Show Course</Button>
                    
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </Stack>
  );
}