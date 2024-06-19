import { Rating } from '@mui/material';
import ChapterContent from '../../Components/Chapters/Chapter';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from 'util/BaseApi';

export default function Chapter() {
  const { id } = useParams();
  let [course,setCourse]=useState()
  let [chapter,setchapter]=useState()

  let nav=useNavigate()
  let GetCourses=async()=>{
    let {data} = await axios.get(`${BaseApi}/course/${id}/chapter`);
    if(data.message=="Done"){
     
      setCourse(data.course)
      setchapter(data.chapters)
    }
    
  }
  useEffect(()=>{
    GetCourses()
  },[])
  return (
    <>
  {course?
   <div className="container my-2">
   <div className="header py-3">
    <div className="img relative">
    <img class="h-50 w-80 m-auto rounded-lg" src="https://media.istockphoto.com/id/1166978137/photo/male-speaker-giving-presentation-in-hall-at-university-workshop.jpg?s=612x612&w=0&k=20&c=OC4wH_PMhXIurkHbBf1IDVD8s2TVct90HV17l6gnz_w=" alt="image description"/>
    <div className=" absolute h-full w-full top-0 bg-gray-900 bg-opacity-60 flex justify-center items-center">
   <div className="">
   <h2 className=" text-1xl text-gray-300 ">Dr john Deo</h2>
   <h2 className=" text-3xl text-gray-100 ">{course?.title}</h2>
      <p className=" text-1xl text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse suscipit cum perspiciatis sapiente voluptate.</p>
      <div className="info flex whitespace-normal">
       <div className="level flex">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>
<p className='px-1 text-gray-400'> for Biggner</p>
       </div>
       <div className="hours flex px-2">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p className='px-1 text-gray-400'>6 hours</p>
       </div>
       <div className="rating flex">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pt-1 text-yellow-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

 <p className='px-1 text-yellow-400 flex'>4.5<p className=' text-gray-400'> (204 Rating)</p></p>
       </div>

      </div>
   </div>
      
      </div> 
    </div>     

     </div>
    
      <div className=" grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 x">
    
      <div className="Chapters col-span-3 ">
      <h3 className=''>
        Courses Overview
      </h3>
      <p className='text-gray-400'>9 sections - 21 lecture - 5h 30m</p>
        <ChapterContent chapter={chapter}/>
      </div>
      <div className=''>
          <div className=" instructor p-3 rounded-md shadow-md">
          <div className='instructor px-2'>
          <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
   <p className='px-2'>Instructor</p>
          </div>
          <h6>Dr : Abhishek Deo</h6>
          <p className='text-gray-400'>Tanta university</p>
          <p className='text-gray-400'>2 Courses * 423.43 learners</p>
        </div>
          </div>
          <div className="related Courses mt-2 p-3">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

<h6 className='px-2'> Related Courses</h6>
            </div>
            <div className='group relative shadow-lg' onClick={()=>{nav(`/courseDetails/`)}}>
                    <div className='mt-2   '>
                     <div className='relative'>
                     <img src='https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_640.jpg' alt='React' className='h-40 w-full object-cover object-center rounded-lg' />
                     <div className='absolute bottom-2 right-2 bg-black opacity-60 p-1 rounded-md '> Best</div>
                     </div>
                      <div className='p-3'>
                        
                         <div className="flex justify-between">
                         <h6 className='text-1xl font-medium'>React js</h6>
                          <div className='pt-1 px-2'> <Rating size='small' color='secondary'  name="read-only" value='4' readOnly /></div>
                         </div>
                        
                        <div className="flex justify-between my-3">
                        <div className="flex">
                          
                          <img class="rounded-full w-10 h-10" src="https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_640.png" alt="image description"/>
                          <p className='pt-1 px-2' style={{fontSize:'14px'}}>John Doe</p>
                          
                                                   </div>
                               <h6 className='pt-1 px-2'>400 EGP</h6>
                        </div>
                      </div>
                    </div>
                  </div>

          </div>
      </div>
      </div>
    
   </div>

    
    :""

  }
    
    
    
    </>
  )
}
