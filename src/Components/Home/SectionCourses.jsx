import { Divider, Rating, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseApi } from "util/BaseApi";
import Slider from "react-slick";

export default function SectionCourses() {
  let nav = useNavigate();
  let [cources,setCourses]=useState([])
  let [key, setKey] = useState('');
  const [headers, setHeaders] = useState({
    token: localStorage.getItem("token"),
  });
  let getCources=async()=>{
    let res= await axios
    .get(`${BaseApi}/recommendation/becauseYouWishlsted`,{ headers })
    .catch((err) => console.log(err));
    if(res.data.message==="Done"){
      setCourses(res.data.recommendations.recommendations)
      setKey(res.data.recommendations.key)
    }

}

useEffect(()=>{
  getCources()
},[])
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

  return (
    <div className="py-5">
     {cources?
    <>
    
    <Typography variant="h6" color="primary">{key}</Typography>
  
      <div className="mx-auto max-w-2xl  py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
       
        <Slider {...settings}>
        {cources.map((ele) => (
                  <div key={ele.course.id} className='group relative px-2' onClick={()=>{nav(`/courseDetails/${ele.course._id}`)}}>
                   
                    <div className='mt-2   '>
                      
                      <img src={ele.coverImageUrl} alt={ele.title} className='h-40 w-full object-cover object-center rounded-tr-3xl' />
                     
                      <div>
                        
                          <Typography variant='body' py={4} color='primary'>{ele.course.title}</Typography>
                        
                       <div className='flex pt-3 '>
                       <Typography color='thrid' px-4 >{ele.course.rating}</Typography>
                       <div className='pt-1 px-2'> <Rating size='small' color='secondary'  name="read-only" value={ele.course.rating} readOnly /></div>
                       </div>

                      </div>
                      <Typography color='thrid' className='text-sm font-medium'>${ele.course.price}</Typography>
                    </div>
                  </div>
                ))}
        </Slider>
       
      </div>
    </> 
    
 :""    
    }
    </div>
  )
}
