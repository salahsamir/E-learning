import {  Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { BaseApi } from '../../util/BaseApi.js';
function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
    
        display: "inline-flex",
        padding: "5px",
      }}
    >
      <CircularProgress variant="determinate" size={50} value={"100%"} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          {props.value}
        </Typography>
      </Box>
    </Box>
  );
}
export default function Chapter() {
  const[chapter,setChapter]=useState([]);
    const {id}=useParams();
    let navigate=useNavigate();
    let getAllChapter = async () => {
      try {
        const response = await axios.get(`${BaseApi}/course/${id}/chapter`);
        if (response && response.data) {
          setChapter(response.data.chapters)
        }
      } catch (error) {
        console.log(error);
      }
    };
   let Parts=async(chapter)=>{
    navigate(`/part/${id}/${chapter}`)
    
   }
   useEffect(()=>{
    getAllChapter()
   },[])
  return (
    <>
      <Stack spacing={2} my={2} py={5}>
        <Container>
        <Typography variant="h3" p={1} color={"primary"} textAlign="center">Chapters</Typography>
        {chapter ? (
  <div className="row">
  
    {chapter.map((item) => {
      return (
        <div key={item.id} className="col-md-4 my-2 ">
         <Box display="flex"  onClick={()=>Parts(item._id)} justifyContent="space-between" width="100%" alignItems="center" border={"1px solid "} borderRadius={"10px"} borderColor={"secondary.main"} p={2} gap="1em">
         <CircularProgressWithLabel color="secondary" value={item.order} />
          <Typography variant="style1">{item.title}</Typography>
          <Button variant="outlined"  ><ArrowForwardIcon/></Button>
         </Box>
        </div>
      );
    })}
  </div>
) : null}
        </Container>
        
      </Stack>
  
    </>
  );
}
