import { Avatar, Box, Container, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi';

export default function Search() {
    const [headers, setHeaders] = useState({
        token: localStorage.getItem("token"),
      });
  const {title} = useParams();
  let[data,setdate]=useState()
  let nav=useNavigate()
  let getCourses = async () => {
    return await axios
      .get(`${BaseApi}/course/search?title=${title}`, { headers })
      .then((res) => setdate(res.data.courses))
      .catch((err) => console.log(err));
  };
useEffect(() => {
   getCourses() 
},[title])
  return (
    <Container >
    {data?
<>
{data.length > 0 ? (
    
  <>
  
  <div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
    <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    {data.map((ele) => (
                  <div key={ele.id} className='group relative' onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
                   
                    <div className='mt-2   '>
                      
                      <img src={ele.coverImageUrl} alt={ele.title} className='h-40 w-full object-cover object-center rounded-tr-3xl' />
                     
                      <div>
                        
                          <Typography variant='p' py={4} color='primary'>{ele.title}</Typography>
                        
                       <div className='flex pt-3 '>
                       <Typography color='thrid' px-4 >{ele.rating}</Typography>
                       <div className='pt-1 px-2'> <Rating size='small' color='secondary'  name="read-only" value={ele.rating} readOnly /></div>
                       </div>

                      </div>
                      <Typography color='thrid' className='text-sm font-medium'>${ele.price}</Typography>
                    </div>
                  </div>
                ))}
    </div>
  </div>

    
  
  </>

)

:<Typography variant="h5">No Data Found</Typography>
}

</>
:
<div
width={"100%"}
height={"100%"}
display={"flex"}
justifyContent={"center"}
alignItems={"center"}
>
<span class="loader"></span>
</div>    

}
    
    </Container>
  )
}
