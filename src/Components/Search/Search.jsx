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
    
     {data.length > 0 ? (
        <div className='my-3'>
            <div className='mx-auto max-w-2xl p py-3  sm:py-16 lg:max-w-7xl'>
              <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {data.map((ele) => (
                  <div key={ele.id} className='group relative shadow-lg' onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
                    <div className='mt-2   '>
                     <div className='relative'>
                     <img src='https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_640.jpg' alt={ele.title} className='h-40 w-full object-cover object-center rounded-lg' />
                     <div className='absolute bottom-2 right-2 bg-black opacity-60 p-1 rounded-md '> Best</div>
                     </div>
                      <div className='p-3'>
                        
                         <div className="flex justify-between">
                         <h6 className='text-1xl font-medium'>{ele.title}</h6>
                          <div className='pt-1 px-2'> <Rating size='small' color='secondary'  name="read-only" value={ele.rating} readOnly /></div>
                         </div>
                        
                        <div className="flex justify-between my-3">
                        <div className="flex">
                          
                          <img class="rounded-full w-10 h-10" src="https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_640.png" alt="image description"/>
                          <p className='pt-1 px-2' style={{fontSize:'14px'}}>John Doe</p>
                          
                                                   </div>
                               <h6 className='pt-1 px-2'>{ele.price} EGP</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
      ) : (
        <div width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <span class='loader'></span>
        </div>
      )}
   
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
