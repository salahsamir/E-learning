import React from 'react'
import {Typography,Stack,Container } from '@mui/material'
import VideoCourses from '../../Components/Video/VideoCourses.jsx'

export default function Video() {
  return (
    <>
    <Stack spacing={1} direction="row" my={"40px"} >
     <Container py={"20px"}>
     <VideoCourses/>
     </Container>
    </Stack>
    
       </>
  )
}
