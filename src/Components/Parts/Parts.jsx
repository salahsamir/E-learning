import { Box, Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from '../../util/BaseApi.js';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Parts() {
    let {id,chapter}=useParams();
    let [parts,setPart]=useState([]);
    let nav=useNavigate()
    let getAllParts = async () => {
        try {
          const response = await axios.get(`${BaseApi}/course/${id}/chapter/${chapter}/curriculum/`);
          if (response && response.data) {
            setPart(response.data.curriculum)
            
            
          }
        } catch (error) {
          console.log(error);
        }
      };

      
      useEffect(()=>{
          getAllParts();
        },[])
       let goToVideo=(curriculum)=>{
           nav(`/video/${id}/${chapter}/${curriculum}`)
       }
        return (
<Stack spacing={2} my={3} py={1} alignItems="center">
  <Typography variant="h3" p={2} color={"third"} textAlign="center">Parts</Typography>
  {parts ? (
    <>
      {parts.map((item) => (
        <Box key={item._id} onClick={()=>goToVideo(item._id)} display="flex" justifyContent="space-between" width={"65%"} border={1} borderColor={"secondary.main"} borderRadius={2} p={1}>
          <Typography variant="h6" p={1} color={"primary"}>{item.title}</Typography>
          <Button variant="contained"><PlayArrowIcon /></Button>
        </Box>
      ))}
    </>
  ) : ""}
</Stack>

  )
}
