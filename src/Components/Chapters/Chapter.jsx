
import { Avatar, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import "./Chapter.css";

export default function Chapter() {
  const {id}=useParams()
  
  let [chapter, setchapter] = React.useState([]);
  React.useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(
         `https://education-project.azurewebsites.net/course/${id}/chapter/`
       );
     setchapter(response.data.chapters);
    //  console.log(response.data.chapters);
       
    
       
     } catch (error) {
       console.log(error);
     }
   };

   fetchData();
   
 }, []);
  let nav=useNavigate()
  return (
    <>
    <div className="container  my-4 py-4">
  
     <div className="m-auto p-1  my-1 ">
 {chapter?
   <div className="row">
   {chapter.map((ele)=>
     <div className="col-md-3">
     <div className='border rounded-3  p-2' onClick={()=>{nav('/video')}}>
     <Typography variant='h5' textAlign={'center'} color='primary'>{ele.title}</Typography>
           <Avatar className='img-fluid w-100 h-75 py-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s'  variant="rounded"/>
           <Typography variant='p'>Introdction to html part 1</Typography>
     </div>
          </div>
   
   )}
   
     </div>

:""}
     </div>

    </div>
    
    
    
    </>

  )
}
