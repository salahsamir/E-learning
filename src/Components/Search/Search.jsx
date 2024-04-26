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
