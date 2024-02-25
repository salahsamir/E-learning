import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BaseApi } from '../../util/BaseApi.js'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { allContext } from '../../Context/Context.jsx';

export default function CourseDetail({id}) {
  const [data, setdata] = useState([])
  let headers = { token: localStorage.getItem('token') }
  let {AddToCart,AddToWishlist}=useContext(allContext)
  let getDate = async () => {
    let {data} = await axios.get(`${BaseApi}/course/${id}`, { headers }).catch(err => console.log(err))
    setdata(data.course)
  }

  useEffect(() => {
    getDate()
  }, [])
// console.log(data);
  return (
    <Stack>
      {data ?  
      <>
        <Box >
        <Box  position={"relative"}  >
        <Avatar src={data.coverImageUrl} style={{ width:"100%",height: "350px" }} variant='rounded'></Avatar>
        <Box position={"absolute"} top={0} py={4} px={2} width={"100%"} height={"100%"}   sx={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <Typography variant="h2" py={3} color="primary">{data.title}</Typography>
        <Box>
                <Box display={"flex"}>
                <Typography variant="h5" color="secondary">Rating:   </Typography>
                <Typography color={"secondary"}>{typeof data.rating === 'number' ? (
                  <Rating value={data.rating}  size="medium" precision={0.5} />
                ) : (
                  <Typography variant="h6" color="secondary">No rating available</Typography>
                )} </Typography>
                </Box>
                
                {data.instructors && data.instructors.length > 0 && ( // Check if instructors array exists and is not empty
            <>
              {/* <Avatar src={data.instructors[0].profilePic.url} style={{ width: "200px", height: "200px" }} variant='rounded'></Avatar> */}
              <Typography variant="h5" color="secondary">By: {data.instructors[0].userName}</Typography>
            </>
          )}
              </Box>



        </Box>
        </Box>
         <Box position={"absolute"} right={'20%'} top={'20%'} py={4} px={2} height={"420px"}>
         <Paper style={{ width: 320, height: "100%" }}>
            <MenuList dense>
                <Avatar src={data.coverImageUrl} style={{ width: "100%", height: "100%" }} variant='rounded'></Avatar>
                <Divider />
                <MenuItem>
                    <ListItemText>
                        <Typography variant="h6" color={"secondary"}>
                            Price :
                            <Typography variant='p' color='primary'>{data.price}$</Typography>
                        </Typography>
                    </ListItemText>
                </MenuItem>
             
                        <Box display={"flex"} p={1} justifyContent={"center"}>
                            <Button variant="contained" color="primary" style={{width: 200, marginRight: 10 }} onClick={() => AddToCart(data._id)}>
                                <Typography variant="h6">Add To Cart</Typography>
                            </Button>
                            <Button variant="outlined" color="secondary" style={{ width: 50 }} onClick={() => AddToWishlist(data._id)} >
                                <FavoriteBorder />
                            </Button>
                        </Box>
                  
                <MenuItem>
                    <ListItemText>
                        <Button variant="outlined" color="secondary" style={{ width: "100%" }}>
                            <Typography variant="h6">Buy Now</Typography>
                        </Button>
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
          </Box>     


        </Box>
        <Box>
          
        </Box>
      </>
      : ""
      }
    </Stack>
  )
}
