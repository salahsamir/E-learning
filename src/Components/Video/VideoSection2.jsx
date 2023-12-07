import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import { BigPlayButton, Player } from 'video-react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export default function VideoSection2() {
  return (
  <Stack spacing={1} direction={'row'} p={3} >
<Box sx={{width:"90%" ,height:"1000px",margin:"auto"}}>
  
<Player playsInline src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster='https://t4.ftcdn.net/jpg/04/82/18/45/360_F_482184571_pEIAB76B4xdQ9lMMVeJTb8xi1uuQYLJ6.webp'>
        <BigPlayButton position="center" />
        </Player> 

        <Typography variant='h5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, cum.</Typography>
     {/* <ButtonGroup  variant="contained">
     <Button ><ThumbUpIcon/></Button>
     <Button ><ThumbDownIcon/></Button>

     </ButtonGroup> */}
  </Box> 
  </Stack>
  )
}
