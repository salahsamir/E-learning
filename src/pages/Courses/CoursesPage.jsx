import { Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import Section2 from '../../Components/Courses/Section2.jsx';
import VerticalTabs from '../../Components/Courses/VerticalTabs.jsx';

export default function CoursesPage() {
  const {value}=useParams()
  return (
   <Stack spacing={4} my={"60px"} direction="row" justifyContent={'space-between'}>    
   <Container>
    <Grid container>
    <Grid item  md={3} sx={{}}>

        <VerticalTabs/>
    </Grid>
    <Grid item sm={12} md={9}>

         <Section2/>

</Grid>

   </Grid>
   </Container>
    
   </Stack>

  )
}
