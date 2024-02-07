import { Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import Section2 from '../../Components/Subcategory//Section2.jsx';
import VerticalTabs from '../../Components/Subcategory//VerticalTabs.jsx';

export default function CoursesPage() {
  const {id}=useParams()
  // console.log(value);
  return (
    <Stack spacing={4} my={"60px"} direction="row" justifyContent={'space-between'}>    
    <Container>
     <Grid container>
         <VerticalTabs id={id} />
    </Grid>
    </Container>
     
    </Stack>

  )
}
