import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseApi } from "../../util/BaseApi.js";

import { Button } from "@mui/material";
import { FavoriteBorder, RateReviewOutlined } from "@mui/icons-material";
import { allContext } from "../../Context/Context.jsx";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from "@mui/icons-material/Check";

import StarIcon from "@mui/icons-material/Star";
import HtmlText from "../../util/HtmlText.js";
export default function CourseDetail({ id }) {
  const [data, setdata] = useState(0);
  let headers = { token: localStorage.getItem("token") };
  let { AddToCart, AddToWishlist, createOrder } = useContext(allContext);

  let getDate = async () => {
    try {
      const response = await axios.get(`${BaseApi}/course/${id}`, { headers });
      if (response && response.data) {
        setdata(response.data.course);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    getDate();
  }, [id]);

  return (
    <Stack spacing={2} my={1} >
      {data ? (
        <>
          <div className="row my-3">
          <div className="col-md-9">
  <Avatar
    src={data.coverImageUrl}
    style={{ width: "90%", height: "50%" }}
    variant="rounded"
  />
  <Typography color="secondary" variant="p">
    description
  </Typography>
  <Typography variant="body1" className="w-75">
      {/* <HtmlText quillContent={data.description} className="w-75" /> */}
  </Typography>
  {/* <Typography variant="body1" className="w-75">
  
    {/* {data.description}
  </Typography> */}
</div>

            <Box className="col-md-3"   borderRadius={2} boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}>
              <Box
                borderRadius={2}
                boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
                p={2}
                my={3}
                width={"100%"}
              >
                <p>Full Course</p>
                <Typography variant="h4" color="primary">
                  ${data.price}
                </Typography>
                <p>Course Includes</p>
                {data.tags?.map((ele, index) => (
                  <Typography my={1} key={index} variant="h6" color="secondary">
                    <CheckIcon color="primary" /> {ele}
                  </Typography>
                ))}
                  <Box display={"flex"} gap={2} >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => AddToCart(data._id)}
                >
              
                <Typography variant="h6">Add To Cart</Typography>
                </Button>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => AddToWishlist(data._id)}
                  width={"100%"}
                
                >
                  <Typography variant="h6"><FavoriteIcon/></Typography>
                </Button>
              </Box>
                </Box>
              <Box
                borderRadius={2}
                display={"flex"}
                justifyContent={"space-between"}
                boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
                p={2}
                my={3}
              >
                <div>
                  <Typography color="primary" variant="h5">
                    Rating
                  </Typography>
                  <Typography>{data.numberOfStudents} Students</Typography>
                </div>
                <div>
                  <StarIcon fontSize="large" sx={{ color: "yellow" }} />
                  <Typography mx={2}>{data.rating}</Typography>
                </div>
              </Box>
              <Box>
              <Stack spacing={2} my={3} py={3}>
                    <Typography variant="h6" color="primary">
                      Reviews
                    </Typography>
                {data.comments?.length ? (
                 
                    <>
                    {data.comments.map((item) => (
                      <Box
                        boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
                        p={3}
                        key={item._id}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                          borderTopRightRadius: "100px",
                          borderBottomRightRadius: "100px",
                          my: "2em",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography variant="p" color="primary">
                            {item.user.userName}
                          </Typography>
                          <Box display={"flex"}>
                            <Typography variant="p" color="secondary">
                              {item.rating}{" "}
                            </Typography>
                            <Typography variant="p">
                              <StarBorderPurple500Icon
                                sx={{ color: "yellow" }}
                              />{" "}
                            </Typography>
                          </Box>
                          <Typography variant="p" color="secondary">
                            {item.comment}
                          </Typography>
                        </Box>
                        <Avatar
                          src={item.user.profilePic.url}
                          sx={{ width: "100px", height: "100px" }}
                        ></Avatar>
                      </Box>
                    ))}
                    </>
                 
                ) : (
                  "No Reviews"
                )}
                 </Stack>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <div
          width={"100%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <span class="loader"></span>
        </div>
      )}
    </Stack>
  );
}
