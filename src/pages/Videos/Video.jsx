// import React from 'react'
// import {Typography,Stack,Container } from '@mui/material'
// import VideoCourses from '../../Components/Video/VideoCourses.jsx'

// export default function Video() {
//   return (
//     <>
//     <Stack spacing={1} direction="row" my={"40px"} >
//      <Container py={"20px"}>
//      <VideoCourses/>
//      </Container>
//     </Stack>
    
//        </>
//   )
// }

import { Container, Grid, Stack } from '@mui/material'
import React from 'react'

import VideoSection1 from '../../Components/Video/VideoSection1.jsx'
import VideoSection2 from '../../Components/Video/VideoSection2.jsx'

export default function Video() {
  return (
  
      <Stack spacing={1} direction={'row'} mt={3}>
        <Container>
          <Grid container>
            <Grid item md={10} xs={12}>
          <VideoSection2/>
            </Grid>
            <Grid item md={2} xs={12}>
          <VideoSection1/>
            </Grid>
          </Grid>
        
        </Container>

      </Stack>
  
  )
}
