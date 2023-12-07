import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BigPlayButton, Player } from 'video-react'

export default function VideoSection1() {
  let [numVideo,setnumVideo]=useState([1,2,3,4,5,6,7])
  return (
   <>
   <Stack spacing={1}  pt={3}>
   {numVideo.map((ele,index)=>(
          <Box sx={{width:"300px" }}  direction={'row'} display={'flex'}>
          
          <Player playsInline src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster='https://t4.ftcdn.net/jpg/04/82/18/45/360_F_482184571_pEIAB76B4xdQ9lMMVeJTb8xi1uuQYLJ6.webp'>
          <BigPlayButton position="center" />
          </Player>
          <Box >
            <Typography variant={'p'}>Lorem, ipsum. </Typography>
            <Typography variant={'p'}>chapter {ele}</Typography>
            </Box>
          
        </Box>
        ))}
      
   </Stack>
   
   </>
  )
}
