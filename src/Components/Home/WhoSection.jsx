
import React from 'react'
import {
    Avatar,
   
    Box,
 
    Divider,
   
    Stack,
    Typography,
  
    Container,
  } from "@mui/material";
  import HouseSidingIcon from '@mui/icons-material/HouseSiding';
  import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
 
  import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { DescSlice } from 'util/DescSlice';
  let data=[
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
    ,
    title:"Achievement",
    decs:"our achievementis to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity",
    image:"https://media.istockphoto.com/id/1477505250/photo/silhouette-business-team-holding-award-trophy-show-victory-business-success-sunset-background.jpg?s=612x612&w=0&k=20&c=6oa0t-gazmsT04mAtjTAf7QeVQxhM-q2x51VqDfr2bA="
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
    
    ,
    title:"cooperation",
    decs:"our cooperation to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity",
    image:"https://media.istockphoto.com/id/1661473901/photo/jigsaw-combines-the-energy-of-teamwork-the-importance-of-working-as-a-team-join-groups-to.jpg?s=612x612&w=0&k=20&c=LiZNtGYRGBSIN2eQlnPwLQS1K08ibnhjAjnOOQqI8WI="
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    
    ,
    title:"Progress",
    decs:"our Progress to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity",
    image:"https://media.istockphoto.com/id/1511226415/photo/unlock-potential-of-business-success-stairs-dart-and-dartboard-targets-magnifying-glass-with.jpg?s=612x612&w=0&k=20&c=AyZSkt_ajo8JfbwJp9p86Ew24N37tMoq60hR5k_g9Rk="
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 m-auto">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
    </svg>
    
    ,
    title:"Certificates",
    decs:"our Certificates to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity",
    image:"https://media.istockphoto.com/id/1454998861/photo/businessman-working-with-computers-service-quality-assurance-guarantee-standards-iso.jpg?s=612x612&w=0&k=20&c=eAfifbAzNbPqEEvIu4y2Ky2g5TQRFIT9qZLQG2vqaJE="
    }
  ]
export default function WhoSection() {
  return (
  <>
  
  <Stack m={"20px"} spacing={1} py={4}>
        <Typography
          data-aos="zoom-in"
          variant="h2"
          color={"primary"}
          textAlign={"center"}
        >
          Who are we{" "}
        </Typography>
        <Divider color={"yellow"}></Divider>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4  cursor-pointer">
          {data.map((item, index) => (
            <div key={index} className='m-2 shadow-md hover:scale-105 '>
              <p className=''>{item.icon}</p>
              <Typography className='py-1' variant="h5" color="primary">{item.title}</Typography>
              <p>{DescSlice(item.decs)}</p>
              <img src={item.image} alt="" className='w-full object-center h-40' />

            </div>
          ))

          }

          </div>
        </div>
       
      </Stack>
  
  </>
  )
}
