import { Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import VerticalTabs from '../../Components/Subcategory//VerticalTabs.jsx';

export default function CoursesPage() {
  const {id}=useParams()

  return (
    <Stack spacing={4} my={"60px"} >    
   
         <Container>


         <VerticalTabs id={id} />
         </Container>
    
     
    </Stack>

  )
}
