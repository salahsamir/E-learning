
import { Container, Stack } from '@mui/material'
import React from 'react'
import CourseDetail from '../../Components/CourseDetail/CourseDetail.jsx'
import { useParams } from 'react-router-dom'

export default function CourseDetails() {
    const {id}=useParams()
  return (
    <>
    
    <Stack >
        <Container>
            <CourseDetail id={id}/>
        </Container>

    </Stack>
    
    </>
  )
}
