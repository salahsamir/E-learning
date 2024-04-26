// import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";

// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { BaseApi } from "../../util/BaseApi.js";

// import { Button } from "@mui/material";
// import { FavoriteBorder, RateReviewOutlined } from "@mui/icons-material";
// import { allContext } from "../../Context/Context.jsx";
// import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CheckIcon from "@mui/icons-material/Check";

// import StarIcon from "@mui/icons-material/Star";
// import HtmlText from "../../util/HtmlText.js";
// export default function CourseDetail({ id }) {
//   const [data, setdata] = useState(0);
//   let headers = { token: localStorage.getItem("token") };
//   let { AddToCart, AddToWishlist, createOrder } = useContext(allContext);

//   let getDate = async () => {
//     try {
//       const response = await axios.get(`${BaseApi}/course/${id}`, { headers });
//       if (response && response.data) {
//         setdata(response.data.course);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(data);
//   useEffect(() => {
//     getDate();
//   }, [id]);

//   return (
//     <Stack spacing={2} my={1} >
//       <h1>salah samir</h1>
//       {data ? (
//         <>
//           <div className="row my-3">
//           <div className="col-md-9">
//   <Avatar
//     src={data.coverImageUrl}
//     style={{ width: "90%", height: "50%" }}
//     variant="rounded"
//   />
//   <Typography color="secondary" variant="p">
//     description
//   </Typography>
//   <Typography variant="body1" className="w-75">
//       {/* <HtmlText quillContent={data.description} className="w-75" /> */}
//   </Typography>
//   {/* <Typography variant="body1" className="w-75">
  
//     {/* {data.description}
//   </Typography> */}
// </div>

//             <Box className="col-md-3"   borderRadius={2} boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}>
//               <Box
//                 borderRadius={2}
//                 boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
//                 p={2}
//                 my={3}
//                 width={"100%"}
//               >
//                 <p>Full Course</p>
//                 <Typography variant="h4" color="primary">
//                   ${data.price}
//                 </Typography>
//                 <p>Course Includes</p>
//                 {data.tags?.map((ele, index) => (
//                   <Typography my={1} key={index} variant="h6" color="secondary">
//                     <CheckIcon color="primary" /> {ele}
//                   </Typography>
//                 ))}
//                   <Box display={"flex"} gap={2} >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => AddToCart(data._id)}
//                 >
              
//                 <Typography variant="h6">Add To Cart</Typography>
//                 </Button>
                
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => AddToWishlist(data._id)}
//                   width={"100%"}
                
//                 >
//                   <Typography variant="h6"><FavoriteIcon/></Typography>
//                 </Button>
//               </Box>
//                 </Box>
//               <Box
//                 borderRadius={2}
//                 display={"flex"}
//                 justifyContent={"space-between"}
//                 boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
//                 p={2}
//                 my={3}
//               >
//                 <div>
//                   <Typography color="primary" variant="h5">
//                     Rating
//                   </Typography>
//                   <Typography>{data.numberOfStudents} Students</Typography>
//                 </div>
//                 <div>
//                   <StarIcon fontSize="large" sx={{ color: "yellow" }} />
//                   <Typography mx={2}>{data.rating}</Typography>
//                 </div>
//               </Box>
//               <Box>
//               <Stack spacing={2} my={3} py={3}>
//                     <Typography variant="h6" color="primary">
//                       Reviews
//                     </Typography>
//                 {data.comments?.length ? (
                 
//                     <>
//                     {data.comments.map((item) => (
//                       <Box
//                         boxShadow={"0 0 20px 0 rgba(0, 0, 0, 0.4)"}
//                         p={3}
//                         key={item._id}
//                         sx={{
//                           display: "flex",
//                           flexDirection: "row",
//                           justifyContent: "space-between",
//                           width: "100%",
//                           borderTopRightRadius: "100px",
//                           borderBottomRightRadius: "100px",
//                           my: "2em",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Box>
//                           <Typography variant="p" color="primary">
//                             {item.user.userName}
//                           </Typography>
//                           <Box display={"flex"}>
//                             <Typography variant="p" color="secondary">
//                               {item.rating}{" "}
//                             </Typography>
//                             <Typography variant="p">
//                               <StarBorderPurple500Icon
//                                 sx={{ color: "yellow" }}
//                               />{" "}
//                             </Typography>
//                           </Box>
//                           <Typography variant="p" color="secondary">
//                             {item.comment}
//                           </Typography>
//                         </Box>
//                         <Avatar
//                           src={item.user.profilePic.url}
//                           sx={{ width: "100px", height: "100px" }}
//                         ></Avatar>
//                       </Box>
//                     ))}
//                     </>
                 
//                 ) : (
//                   "No Reviews"
//                 )}
//                  </Stack>
//               </Box>
//             </Box>
//           </div>
//         </>
//       ) : (
//         <div
//           width={"100%"}
//           height={"100%"}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//         >
//           <span class="loader"></span>
//         </div>
//       )}
//     </Stack>
//   );
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useContext, useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import axios from 'axios'
import { allContext } from 'Context/Context'
import { BaseApi } from 'util/BaseApi'
import { Button, Typography } from '@mui/material'
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CourseDetail({id}) {

  const [data, setdata] = useState(0);
    let headers = { token: localStorage.getItem("token") };
    let { AddToCart, AddToWishlist, createOrder } = useContext(allContext);
  
    let getDate = async () => {
      try {
        const response = await axios.get(`${BaseApi}/course/${id}`, { headers });
        if (response && response.data) {
          setdata(response.data.course);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getDate();
    }, []);
  

  return (
    <div className="">
     {data?
    <>
     <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          < li>
                <div className="flex items-center">
                  <a  className="mr-2 text-sm font-medium text-gray-500">
                    {data.title}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              < li>
                <div className="flex items-center">
                  <a  className="mr-2 text-sm font-medium text-gray-500">
                    {data.level}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            <li className="text-sm">
              <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {data.language}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg">
              <img
                src={data.coverImageUrl}
                alt={data.coverImageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
          
          </div>
        
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <Typography color={'primary'} variant={'h1'} className="text-2xl font-bold tracking-tight  sm:text-3xl">{data.subtitle}</Typography>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">cource information</h2>
            <p className="text-3xl tracking-tight text-green-400">{data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{data.numberOfRatings} out of 5 stars</p>
                <Typography color={'primary'}  className="ml-3 text-sm font-medium hover:text-indigo-500">
                  {data.numberOfStudents} reviews
                </Typography>
              </div>
            </div>

            <form className="mt-10">
             
              <div className="flex justify-between ">
                
                <Button variant="contained" className="mt-10  " onClick={()=>AddToCart(data._id)}>Add to cart</Button>
                <Button variant="contained" className="mt-10 " onClick={()=>AddToWishlist(data._id)}>Add to wishlist</Button>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>createOrder(data._id)}
              >
              Buy Now
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="mt-10">
              <h3 className="text-sm font-mediu">Instructors</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {data.instructors.map((ele) => (
                    <li className="text-yellow-400">
                      <span className="text-gray-300">{ele.userName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              {/* <h2 className="text-sm font-medium text-yellow-400">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  )
}
