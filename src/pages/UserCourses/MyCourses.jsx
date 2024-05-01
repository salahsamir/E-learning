import {

  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Box,

} from "@mui/material";
import React, { useContext, useEffect, useState, Fragment } from "react";
import { allContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
    let nav=useNavigate()
  let { course } = useContext(allContext);

 

  return (
   <Fragment>
  <div className="container py-2 mt-2">
    <Typography variant="h6" py={1} color={"primary"} >Recent Enrolled Course </Typography>
    <div className="grid grid-cols-4 gap-3 py-3">
         {course?.map((ele) => (
           <div key={ele._id} onClick={() => nav(`/Chapter/${ele._id}`)} className=" rounded-lg shadow-md cursor-pointer" >
             <img src={ele.coverImageUrl} alt={ele.title} className="w-full h-40 object-cover rounded-lg" />
            <div className="content px-2">
            <p className="text-gray-500 pt-1 " style={{fontSize:"14px"}}>ACourse By john Deo </p>
            <p className=" " style={{fontSize:"16px"}}>{ele.title} </p>
            <div className="completed">
             <div className="flex justify-between">
             <p className="text-gray-200  " style={{fontSize:"12px"}}>25%</p>
              <p className="text-gray-200 " style={{fontSize:"12px"}}>4/20 lessons</p>
             </div>
              
<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-green-600 h-2.5 rounded-full" style={{width: '25%'}} />
</div>


            </div>

            </div>
           </div>

         ))}
        
        
        </div>  
  </div>
   </Fragment>

    


    // <div className="container">
    //    <Typography variant="h3" py={3} color={"primary"} textAlign="center">
    //       My Courses
    //     </Typography>
    //     <div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
    //           <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    //             {course.map((ele) => (
    //               <div key={ele._id} onClick={() => nav(`/Chapter/${ele._id}`)} className='group relative' >
    //                 <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
    //                   <img src={ele.coverImageUrl} alt={ele.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
    //                 </div>
    //                 <div className='mt-4 flex justify-between'>
    //                   <div>
    //                     <h3 className='text-sm text-gray-700'>
    //                       <Typography color='primary'>{ele.title}</Typography>
    //                     </h3>
    //                   </div>
                      
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    // </div>


  );
}