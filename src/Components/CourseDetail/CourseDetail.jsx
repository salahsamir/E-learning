
// import { useContext, useEffect, useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { RadioGroup } from '@headlessui/react'
// import axios from 'axios'
// import { allContext } from 'Context/Context'
// import { BaseApi } from 'util/BaseApi'
// import { Button, Typography } from '@mui/material'
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function CourseDetail({id}) {

//   const [data, setdata] = useState(0);
//     let headers = { token: localStorage.getItem("token") };
//     let { AddToCart, AddToWishlist, createOrder } = useContext(allContext);
  
//     let getDate = async () => {
//       try {
//         const response = await axios.get(`${BaseApi}/course/${id}`, { headers });
//         if (response && response.data) {
//           setdata(response.data.course);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
    
//     useEffect(() => {
//       getDate();
//     }, []);
  

//   return (
//     <div className="">
//      {data?
//     <>
//      <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//           < li>
//                 <div className="flex items-center">
//                   <a  className="mr-2 text-sm font-medium text-gray-500">
//                     {data.title}
//                   </a>
//                   <svg
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                     className="h-5"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//               < li>
//                 <div className="flex items-center">
//                   <a  className="mr-2 text-sm font-medium text-gray-500">
//                     {data.level}
//                   </a>
//                   <svg
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                     className="h-5"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//             <li className="text-sm">
//               <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//                 {data.language}
//               </a>
//             </li>
//           </ol>
//         </nav>
//         <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          
//           <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
//             <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg">
//               <img
//                 src={data.coverImageUrl}
//                 alt={data.coverImageUrl}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
          
//           </div>
        
//         </div>

//         <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
//           <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//             <Typography color={'primary'} variant={'h1'} className="text-2xl font-bold tracking-tight  sm:text-3xl">{data.subtitle}</Typography>
//           </div>

//           {/* Options */}
//           <div className="mt-4 lg:row-span-3 lg:mt-0">
//             <h2 className="sr-only">cource information</h2>
//             <p className="text-3xl tracking-tight text-green-400">{data.price}</p>

//             {/* Reviews */}
//             <div className="mt-6">
//               <h3 className="sr-only">Reviews</h3>
//               <div className="flex items-center">
//                 <div className="flex items-center">
//                   {[0, 1, 2, 3, 4].map((rating) => (
//                     <StarIcon
//                       key={rating}
//                       className={classNames(
//                         reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
//                         'h-5 w-5 flex-shrink-0'
//                       )}
//                       aria-hidden="true"
//                     />
//                   ))}
//                 </div>
//                 <p className="sr-only">{data.numberOfRatings} out of 5 stars</p>
//                 <Typography color={'primary'}  className="ml-3 text-sm font-medium hover:text-indigo-500">
//                   {data.numberOfStudents} reviews
//                 </Typography>
//               </div>
//             </div>

//             <form className="mt-10">
             
//               <div className="flex justify-between ">
                
//                 <Button variant="contained" className="mt-10  " onClick={()=>AddToCart(data._id)}>Add to cart</Button>
//                 <Button variant="contained" className="mt-10 " onClick={()=>AddToWishlist(data._id)}>Add to wishlist</Button>
//               </div>

//               <button
//                 type="submit"
//                 className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 onClick={()=>createOrder(data._id)}
//               >
//               Buy Now
//               </button>
//             </form>
//           </div>

//           <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//             <div className="mt-10">
//               <h3 className="text-sm font-mediu">Instructors</h3>

//               <div className="mt-4">
//                 <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                   {data.instructors.map((ele) => (
//                     <li className="text-yellow-400">
//                       <span className="text-gray-300">{ele.userName}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-10">
//               {/* <h2 className="text-sm font-medium text-yellow-400">Details</h2>

//               <div className="mt-4 space-y-6">
//                 <p className="text-sm text-gray-600">{product.details}</p>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </> 
//     : 
//     <div
//               width={"100%"}
//               height={"100%"}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//             >
//               <span class="loader"></span>
//             </div>
//     }
//     </div>
//   )
// }
import { Button, Rating, Typography } from '@mui/material'
import React from 'react'
import star from './../../assets/svg/star-emoj.svg'

export default function CourseDetail() {
  const data=[{
    id:1,
    img:'data:image/jpeg;base64,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U32XT396sfZ3YnGfHuyw8pUVlGhwqYIDIUQRTDfBbHERr4b4bus1wc4sMtoZGRkue8RSIvEYnwzlw6tYjjjHzcaj8iNivYYMTagueGvJEokKouk9thOy10nCokXWLKulFpjE8PRy2vuxJyW6DGjsgmjsaxzrQ6KXhsia3bcieAykr6U0veKzWMeefVTU3qUm2fRbk2BCjB56FrQ18BrQ1z/gvi7Ltol1ZIqnVwU0il8zu45ePiz1tS2njj3T8oWY2A6le9BAaGOimE1+1E6UOJ2GvrdsynI7MrKra1Wdyb7kRwzj3sbzrV0Pb7/GI3scMY5zHLPLvzz93Bi5apDTBowEGG0mCSCDFm0e+I4kNp5EjKdYJrO5UvMbteHd/wAynZNO0aurM3mftcvs/wCynHhEOMsnoCAgICAgAplMThmg0lzTMH88jkrxe0LRqWhsxItW20yabjKTTgZCZyWk3nnDWdScZiVRHdcbbJgV4udgMNTjfsj2lvFifTHTqNVgqFnYqzqWUnVsr75diPst9FG/ZHtLI98OsmLZ2Nt7FG/Jv2SKS/5XcE37HtLeLCqqCAgICAgICAgICAgICDr/AOpPi0aDQGw5lsUlpnW5zyQGyNQrditd+bVikQ6fbTqaVdCI7/V2+clKfB5PgUKIR0xAMUAglsJjnGExxH0p/wAvbtq2munFJ59/w7nXtV7aez10bfi7/hHKE02mQ4dAoAi0dsZrmxjIucwgteJSc26szF9WCm14jSpFozzW1NStdn0ovXMcfd3uc3nbE98PjOhscx8PoTBrDOiFjQbZiuvM7ln+02m02nlyx7nHba7WvNpjhMYx7mnS+UaO4sDKG1jASXDpYjnPmJAbZ+CBbZaqWvSeVfm57TE8owiHyuIQAo7DD67Iji9/SOcWT2W1NaA2szEq51lRGpu/hZWpvcyj8pQYcQRYdHIcDORjEsFRmGt2Zi29zlNb1rOYj5s76V713Ztw+H/aOQKZsvEKU+kiwK52bEQGy+aaVsTjxwz2vTzSb55Rb5w2KdynDZHiRGQdmNtRBtbc2NcSQXth7Mw60jrEAmoWSm14i0zEcWOns176VaWvmmI4Y4zHhM55eWZjvc+PTGvgw2Fh24bSxrg/qlhe+JWzZ+FN7q9qy5ZzaJiI8HTTRtTVtaJ4WnMxjjnERzzy4Rwx5tNVdAgICAgICAgvCils8DbXLvxUxOExOB8S4X2zMyd5SZJlRQgQEBAQEBAQEBAQEBAQEBAQEAFAJnWgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z',
    instructor:{name:"John Doe",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",work:"Front End Engineer"},
    desc:"Join this bestselling MongoDB course to learn all about this extremely popular database and query language from the ground up, in great detail and with many practical examples! - MongoDB is one of the most important NoSQL databases you can work with. It's extremely popular and MongoDB developers are in high demand! No matter if you're building web applications, mobile applications or any other kind of application or if you're a data scientist - you'll need to work with data. Storing data, querying it efficiently and minimizing complexities whilst optimizing performance are crucial tasks. MongoDB makes working with data simple - it's built on a philosophy that prioritizes performance and efficiency. In this course, you learn all about MongoDB from scratch. No prior MongoDB or database experience is required!"
    ,
    price:"$ 59.99",
    student:1200,
    video:14,
    article:33,
    duration:"8 Weeks",
    level:"Biggner",
    views:"800",
    rating:4.7,
    numRating:'320 rating'
  }]
  return (
    <>
    {data.map((item, index) => (
     
       <div>
         <div className="grid grid-cols-1 lg:grid-cols-3 my-2 gap-6">
         <div className='col-span-2'>
      <div className="img">
  <img class="h-96 w-full rounded-lg shadow-xl dark:shadow-gray-800" src={item.img} alt="image description"/>
  </div>
  <div className="instractor flex justify-between mt-2">
    <div className='flex '>
      
<img class="rounded-full w-20 h-20" src={item.instructor.img} alt="image description"/>
  <div className="flex flex-col mx-2">
  <Typography color={'primary'} variant={'p'} className=" text-2xl  tracking-tight mx-2">{item.instructor.name}</Typography>
  <Typography color={'thrid'} variant={'p'} className="  tracking-tight text-1xl">{item.instructor.work}</Typography>
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
      <p className='text-1xl text-gray-500'>{item.desc}</p>
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
{item.duration}
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
{item.level}
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
{item.views}
</p>
          </div>
        </div>
        
      </div>
    </div>
        </div>
        <div>
          <div className="course p-3 shadow-md shadow-black  border-spacing-5 rounded-md">
            <p className="text-1xl text-gray-500">full course</p>
            <h3 className="text-4xl">{item?.price}</h3>
            <div className="content">
            <h3 className="text-2xl text-gray-500">Course Content</h3>
            <div className="student flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className="text-1xl ms-2 text-gray-500">{item.student}</p>
            </div>
            <div className="video flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

<p className="text-1xl ms-2 text-gray-500">{item.video} video</p>
            </div>
            <div className="article flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


<p className="text-1xl ms-2 text-gray-500">{item.article} articles</p>
            </div>
            <div className="certificate flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>



<p className="text-1xl ms-2 text-gray-500">Certificate</p>
            </div>
            <div className="button">
              <Button variant="contained" className="w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</Button>
<Button variant="contained" className="w-full mt-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

</Button>
<div className="AddToCart mt-2">
<div class="flex mt-2">
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  Coupon
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
  <Button variant="contained" className="ms-2">Apply

</Button>

</div>

</div>
            </div>
            </div>
          </div>
          <div className="rating flex justify-between mt-3 shadow-md shadow-black  border-spacing-5 rounded-md p-3">
            
<img class="rounded-full w-20 h-20" src={star} alt="image description"/>
   <div>
    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
    <p className='text-1xl text-gray-400'>{item.rating} ({item.numRating})</p>
   </div>
          
          </div>
        </div>
        
    </div>
    <section className="relative my-8 isolate overflow-hidden  px-6 py-12 sm:py-12 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.slate.200))] opacity-40" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-green-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto text-center max-w-2xl lg:max-w-4xl">
       
        <div><h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-4xl">“</h1></div>
        <figure className="mt-8">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className='text-gray-100'>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-100">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-300">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
       </div>
     
       
       
      ))}
      </>


  )
}
