
import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CoursesPart.css";

export default function CoursesParts() {
  let nav=useNavigate()
  return (
    <>
    <div className="container  my-4 py-4">
  
     <div className="m-auto p-1  my-1 ">
   <div className="row">
     <div className="col-md-3">
<div className='border rounded-3  p-3' onClick={()=>{nav('/video')}}>
<Typography variant='h5' color='primary'>Introdction</Typography>
      <Avatar className='img-fluid w-100 h-75 py-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s'  variant="rounded"/>
      <Typography variant='p'>Introdction to html part 1</Typography>
</div>
     </div>
   
     </div>
     </div>

    </div>
    
    
    
    </>

  )
}
