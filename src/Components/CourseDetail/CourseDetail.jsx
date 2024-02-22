import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseApi } from '../../util/BaseApi.js'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { Button } from '@mui/material';

export default function CourseDetail({id}) {
  const [data, setdata] = useState([])
  let headers = { token: localStorage.getItem('token') }

  let getDate = async () => {
    let {data} = await axios.get(`${BaseApi}/course/${id}`, { headers }).catch(err => console.log(err))
    setdata(data.course)
  }

  useEffect(() => {
    getDate()
  }, [])

  // console.log(data);

  return (
    <Stack py={5}>
      {data ?  
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Typography variant="h2" color="primary">{data.title}</Typography>
              <Typography variant="h6" color="secondary">Instructor Details</Typography>
              {data.instructors && data.instructors.length > 0 && ( // Check if instructors array exists and is not empty
            <>
              <Avatar src={data.instructors[0].profilePic.url} style={{ width: "200px", height: "200px" }} variant='rounded'></Avatar>
              <Typography variant="h6" color="secondary">By: {data.instructors[0].userName}</Typography>
            </>
          )}
              
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="h6" color={"secondary"}>Rating: </Typography>
                {typeof data.rating === 'number' ? (
                  <Rating value={data.rating} py={1} size="medium" precision={0.5} />
                ) : (
                  <Typography variant="h6" color="secondary">No rating available</Typography>
                )}
              </Box>
              <Box display={"flex"} alignItems={"center"}></Box>
            </div>
            <div className="col-md-6">
              <Paper style={{ width: 320 }}>
                <MenuList dense>
                  <Avatar src={data.coverImageUrl} style={{ width: "100%", height: "100%" }} variant='rounded'></Avatar>
                  <Divider />
                  <MenuItem>
                    <ListItemText>   
                      <Typography variant="h6" color={"secondary"}>
                        Price :
                        <Typography variant='p' color='primary'>{data.price}$ </Typography> 
                      </Typography>   
                    </ListItemText>
                  </MenuItem>
                  <MenuItem>
                    {/* <ListItemText>Add space after paragraph</ListItemText> */}
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>
                      <Button variant="contained">Add To Cart...</Button>
                    </ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </div>
          </div>
        </div>
      </>
      : ""
      }
    </Stack>
  )
}
