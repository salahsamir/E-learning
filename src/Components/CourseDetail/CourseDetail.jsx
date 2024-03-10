import { Avatar, Box, Rating, Stack, Typography } from '@mui/material';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BaseApi } from '../../util/BaseApi.js';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import { FavoriteBorder, RateReviewOutlined } from '@mui/icons-material';
import { allContext } from '../../Context/Context.jsx';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
export default function CourseDetail({ id }) {
  const [data, setdata] = useState([]);
  let headers = { token: localStorage.getItem('token') };
  let { AddToCart, AddToWishlist,createOrder } = useContext(allContext);
  
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
  useEffect(() => {
    getDate();
  }, []);

  return (
    <Stack>
      {data ?  
      <>
        <Box>
          <Box position={"relative"}>
            <Avatar src={data.coverImageUrl} style={{ width:"100%",height: "400px" }} variant='rounded'></Avatar>
            <Box position={"absolute"} top={0} py={4} px={2} width={"100%"} height={"100%"} sx={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
            <Typography variant="h3" py={1} color="thrid.main">{data.title}</Typography>
            <Box width={'60%'}>
              <Typography variant="h6" py={1} color="secondary">{data.subtitle}</Typography>
              <Typography variant="h6" py={1} color="secondary" display={"flex"}>language:<Typography variant="h6" color={"thrid.main"} px={1}>{data.language}</Typography></Typography>
              <Typography variant="h6" py={1} color="secondary" display={"flex"}>level: <Typography variant="h6" color="thrid.main"  px={1}>{data.level}</Typography></Typography>
              <Typography variant="h6" py={1} color="secondary" display={"flex"}>price:<Typography variant="h6" color="thrid.main"  px={1}>{data.price}$</Typography></Typography>
              <Box className='d-flex my-1'>
              {data.tags?data.tags.map((tag)=>{return <span className="badge rounded-pill  p-2 me-2" style={{background:"#3C92A6"}}>{tag}</span>}):""}

              </Box>
              <Box>
                <Box display={"flex"}>
                  <Typography variant="h5" color={"secondary"}>Rating:   </Typography>
                  <Typography color={"secondary"}>
                    {typeof data.rating === 'number' ? (
                      <Rating value={data.rating} size="medium" precision={0.5} />
                    ) : (
                      <Typography variant="h6" color="secondary">No rating available</Typography>
                    )}
                  </Typography>
                </Box>
                {data.instructors && data.instructors.length > 0 && (
                  <>
                    <Typography variant="h5" color="secondary">By: {data.instructors[0].userName}</Typography>
                  </>
                )}
            </Box>
              </Box>
            </Box>
          </Box>
          <Box position={"absolute"} right={'5%'} top={'15%'} py={4} px={2} height={"auto"}>
            <Paper style={{ width: 320, height: "100%" }}>
              <MenuList dense>
                <Avatar src={data.coverImageUrl} style={{ width: "100%", height: "100%" }} variant='rounded'></Avatar>
                <Divider />
                <MenuItem>
                  <ListItemText>
                    <Typography variant="h6" color={"secondary"}>
                      Price :
                      <Typography variant='p' color='thrid.main'>{data.price}$</Typography>
                    </Typography>
                  </ListItemText>
                </MenuItem>
                <Box display={"flex"} p={1} justifyContent={"center"}>
                  <Button variant="contained" color="thrid" style={{width: 200, marginRight: 10 }} onClick={() => AddToCart(data._id)}>
                    <Typography variant="h6">Add To Cart</Typography>
                  </Button>
                  <Button variant="outlined" color="secondary" style={{ width: 50 }} onClick={() => AddToWishlist(data._id)} >
                    <FavoriteBorder />
                  </Button>
                </Box>
                <MenuItem>
                  <ListItemText>
                    {/* <Button variant="outlined" color="secondary" onClick={() => createOrder} style={{ width: "100%" }}>
                      <Typography variant="h6">Buy Now</Typography>
                    </Button> */}
                  </ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Box>
        </Box>
        <Box>
          {data.comments?.length ?
            <Stack spacing={2} my={3}>
              <Typography variant="h4" color="primary">Reviews</Typography>
              {data.comments.map((item) => (
                <Box
                  boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
                  p={3}
                  key={item._id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width:"50%",
                    borderTopRightRadius: "100px",
                    borderBottomRightRadius: "100px",
                    my: "2em",
                    alignItems: "center",
                  }}>
                  <Box>
                    <Typography variant="h5" color="primary">{item.user.userName}</Typography>
                    <Box display={"flex"}>
                      <Typography variant="h6" color="secondary">{item.rating} </Typography>
                      <Typography variant="p"><StarBorderPurple500Icon sx={{color:"yellow"}}/> </Typography>
                    </Box>
                    <Typography variant="h6" color="secondary">{item.comment}</Typography>
                  </Box>
                  <Avatar src={item.user.profilePic.url} sx={{ width: "100px", height: "100px" }} ></Avatar> 
                </Box>
              ))}
            </Stack>
            : ""
          }
        </Box>
      </>
      : ""
      }
    </Stack>
  );
}
