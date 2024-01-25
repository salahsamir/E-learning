import React from 'react'
import ReactPlayer from "react-player";
import "./Video.css";

import { Button, Container } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
export default function Video() {
  let nav=useNavigate()
  let goToAssignment=()=>{
    nav('/assignment')
  }
  return (
     <div className="video_container my-4 py-4">

     <div>
       <h2>Introdction</h2>
     </div>
     <Container maxWidth="md" justify="center">
       <div className="player__wrapper">
       <ReactPlayer
           className="player"
           url="https://www.youtube.com/watch?v=TpD5ITq6VEQ"
           width="100%"
           height="400px"
           playing={true}
           controls={true}
         />
    
     </div>
   </Container>

   <Button variant="contained" className='my-2' onClick={()=>{goToAssignment()}}> Next <NavigateNextIcon/></Button>
 </div>
  )
}
