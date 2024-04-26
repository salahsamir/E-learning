import { Avatar, Box, Container, Typography } from '@mui/material';
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
    
<<<<<<< HEAD
    <div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
    <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {data.map((ele) => (
        <div key={ele.id} className='group relative' onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
            <img src={ele.coverImageUrl} alt={ele.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700'>
                <Typography color='primary'>{ele.title}</Typography>
              </h3>
            </div>
            <p className='text-sm font-medium text-gray-200'>{ele.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
=======
    <Box py={5}>
    <div className="row  g-2" >
      {data.map((ele, index) => (
        <div
          p={"5px"}
          key={index}
          data-aos="zoom-in-down"
          background={"#fff"}
          className={` col-md-4 `}
          onClick={()=>{nav(`/courseDetails/${ele._id}`)}}
        >
            <Avatar variant="rounded" src={ele.coverImageUrl} sx={{height:"180px",width:"100%",backgroundSize:"cover",backgroundPosition:"center"}}/>
         <Typography variant="h5" color={"primary"} py={2}>{ele.title}</Typography>
    </div>
      ))}
    </div>
    
    
    </Box>
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
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
