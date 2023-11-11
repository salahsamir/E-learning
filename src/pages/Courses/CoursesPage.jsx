import { Container, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import Section1 from '../../Components/Courses/Section1.jsx';
import Section2 from '../../Components/Courses/Section2.jsx';

export default function CoursesPage() {
  const {value}=useParams()
  return (
   <Stack spacing={4} my={"60px"} direction="row" justifyContent={'space-between'}>
  
      
        <Section1 value={value}/>
         <Section2/>
      
    
   </Stack>

  )
}
