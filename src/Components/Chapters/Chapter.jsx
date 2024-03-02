
import { Avatar, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import "./Chapter.css";
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Chapter() {
  const {id}=useParams()
 
  
  let [chapter, setchapter] = React.useState([]);

  let nav=useNavigate()
  return (
    <>
    <div className="container  my-4 py-1">
  
  
    <div className="row">
      <div className="col-md-10">
      
      <MediaPlayer title="Sprite Fight" src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4">
  <MediaProvider />
  <DefaultVideoLayout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>
     
      </div>
      <div className="col-md-2">
      <Typography variant='h3' >Salah</Typography>

      </div>
    </div>
   

    </div>
    
    
    
    </>

  )
}
