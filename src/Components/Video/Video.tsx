import { Container } from '@mui/material'
import Buttons from 'Ui/Buttons.tsx'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi'
import HtmlText from 'util/HtmlText'
interface IProps{
type:string,
id:string
}
const Video=({type,id}:IProps)=> {
    let [video,setvideo]=useState()
    let nav=useNavigate()
    let fetchData=async()=>{
        try {
            let res=await axios.get(`${BaseApi}/course/${type}/${id}`)
        
            if(res.status===200){
                setvideo(res.data.curriculum)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div className='p-5 container'>
     {
    video?
    < >
    <div className="flex  justify-center">
    <video className="h-full w-3/4 rounded-lg" controls>
      <source src={video.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="flex justify-center mt-2">
       <Buttons bgColor='bg-green-500'  onClick={()=>nav(-1)}>Complete</Buttons>
       </div>
    
    </>:""
}

    </div>
  )
}

export default Video