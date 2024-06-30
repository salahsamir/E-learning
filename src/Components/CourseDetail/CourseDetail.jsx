
import { Button, Rating, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import star from './../../assets/svg/star-emoj.svg'
import axios from 'axios'
import { BaseApi } from 'util/BaseApi'
import HtmlText from './../../util/HtmlText'
import { allContext } from 'Context/Context'
import { log } from '@livekit/components-core'

export default function CourseDetail({id}) {
  let {AddToWishlist,AddToCart}=useContext(allContext)
  let headers = { token: localStorage.getItem("token") };
  let[course,setCourse]=useState([])
      let getDate = async () => {
      try {
        const response = await axios.get(`${BaseApi}/course/${id}`, { headers });
        
        if (response && response.data) {
          setCourse(response.data.course);
      
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getDate();
    }, []);

    let [coupon,setCoupon]=useState({
      coupon:""
    })
    let handelChange=async(e)=>{
      setCoupon({...coupon,[e.target.name]:e.target.value})
      
          // const response = await axios.patch(`${BaseApi}/cart/${id}?type=workshop&coupon=${coupon.coupon}`, {}, { headers });
    }
    let handelSubmit=async(e)=>{
      e.preventDefault()
       await axios.patch(`${BaseApi}/cart/${id}?type=course&coupon=${coupon.coupon}`, {}, { headers }).then((res)=>{
        console.log(res)
       })
       .catch((err)=>console.log(err))
      
    }

  return (
    <>
    {course.length!==0?
    <>
       <div>
         <div className="grid grid-cols-1 md:grid-cols-3 my-2 gap-6">
         <div className='col-span-2'>
      <div className="img">
  <img class="h-96 w-full rounded-lg shadow-xl dark:shadow-gray-800" src={course.coverImageUrl} alt="image description"/>
  </div>
  <div className="instractor flex justify-between mt-2">
    <div className='flex '>
      
{/* <img class="rounded-full w-20 h-20" src={course.createdBy.profilePic?.url} alt="image description"/> */}
  <div className="flex flex-col mx-2">
  {/* <Typography color={'primary'} variant={'p'} className=" text-2xl  tracking-tight mx-2">{course.createdBy.userName}</Typography> */}
  {/* <Typography color={'thrid'} variant={'p'} className="  tracking-tight text-1xl">{course.instructor.work}</Typography> */}
  </div>
    </div>
    <div className='flex mt-2 '>
      <div className="flex ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
<p className='mx-2 text-1xl'>229</p>

      </div>
      <div className="flex ms-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

<p className='mx-2 text-1xl'>share</p>

      </div>
    </div>
  </div>
    <div className="desc mt-4">
      <h3 className="text-2xl font-bold-900">Description</h3>
      <HtmlText description={course.description}/>
      
    </div>
     <div className="features mt-4">
        <h4 className="text-2xl font-bold-900">Features</h4>
      <div className="grid grid-cols-3 gap-2 content-center ">
        <div className=" p-2 mx-1 shadow-md shadow-black    border-spacing-3">
          <h6 className='text-1xl'>Duration</h6>
          <div className="flex ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

<p className='ps-2'>
{course.duration}
</p>
          </div>
        </div>
       
        <div className=" p-2 mx-1 shadow-md shadow-black rounded-md">
          <h6 className='text-1xl'>Level</h6>
          <div className="flex">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

<p className='ps-2'>
{course.level}
</p>
          </div>
        </div>
        
        <div className=" p-2 mx-1 shadow-black  shadow-md  border-spacing-3">
          <h6 className='text-1xl'>Views</h6>
          <div className="flex">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

<p className='ps-2'>
{course.views}
</p>
          </div>
        </div>
        
      </div>
    </div> 
        </div>
        <div>
          <div className="course p-3 shadow-md shadow-black  border-spacing-5 rounded-md">
            <p className="text-1xl text-gray-500">full course</p>
            <h3 className="text-4xl">{course?.price}</h3>
            <div className="content">
            <h3 className="text-2xl text-gray-500">Course Content</h3>
            <div className="student flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className="text-1xl ms-2 text-gray-500">{course.numberOfStudents}</p>
            </div>
            <div className="video flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

<p className="text-1xl ms-2 text-gray-500">{course.numberOfVideos} video</p>
            </div>
            <div className="article flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


<p className="text-1xl ms-2 text-gray-500">{course.numberOfArticles} articles</p>
            </div>
            <div className="certificate flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>



<p className="text-1xl ms-2 text-gray-500">Certificate</p>
            </div>
            <div className="button">
              <Button variant="contained" onClick={()=>{AddToWishlist(course._id)}} className="w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</Button>
<Button variant="contained" onClick={()=>{AddToCart(course._id)}} className="w-full mt-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

</Button>
<div className="AddToCart mt-2">
<form class="flex mt-2 w-full ">
 
 
  <input type="text" id="coupon" onChange={handelChange} name="coupon" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon"/>
 
  
  <Button variant="contained" className="ms-2" onClick={handelSubmit}>Apply
</Button>

</form>

</div>
            </div>
            </div>
          </div>
          <div className="rating flex justify-between mt-3 shadow-md shadow-black  border-spacing-5 rounded-md p-3">
            
<img class="rounded-full w-20 h-20" src={star} alt="image description"/>
   <div>
    <Rating name="half-rating" defaultValue={course.rating} precision={0.5} />
    <p className='text-1xl text-gray-400'>{course.rating} ({course.numberOfRatings})</p>
   </div>
          
          </div>
        </div>
        
    </div>

       </div>
  
    
    </>
    
  
  :
  
  <div width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} aligncourses={'center'}>
          <span class='loader'></span>
        </div>}
      </>


  )
}
