
import React, { useState } from 'react'
import {Typography,Stack, Box} from '@mui/material'
import { Player ,BigPlayButton} from 'video-react';
export default function VideoCourses() {
 let [numVideo,setnumVideo]=useState([1,2,3,4,5,6,7])
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-around'}>
      <Box  p={2}>
        
        {numVideo.map((ele,index)=>(
          <Box sx={{width:"300px" ,height:"200px"}}  direction={'row'} display={'flex'}>
            <Box >
            <Typography variant={'p'}>Lorem, ipsum. </Typography>
            <Typography variant={'p'}>chapter {ele}</Typography>
            </Box>
          
          <Player playsInline src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster='https://t4.ftcdn.net/jpg/04/82/18/45/360_F_482184571_pEIAB76B4xdQ9lMMVeJTb8xi1uuQYLJ6.webp'>
          <BigPlayButton position="center" />
          </Player>
          
        </Box>
        ))}
        

      </Box>
      <Box  sx={{width:"1000px" ,height:"1000px"}}  p={2}>
        <Player playsInline src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster='https://t4.ftcdn.net/jpg/04/82/18/45/360_F_482184571_pEIAB76B4xdQ9lMMVeJTb8xi1uuQYLJ6.webp'>
        <BigPlayButton position="center" />
        </Player>
        <Typography py={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolore?</Typography>

          
        
      </Box>

    </Stack>
    
       </>
  )
}

