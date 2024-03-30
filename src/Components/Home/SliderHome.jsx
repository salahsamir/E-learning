import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';

export default function SliderHome() {
  const sliderItems = [
    {
      img: 'https://img.freepik.com/free-photo/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.jpg?w=740&t=st=1711430131~exp=1711430731~hmac=ae33478cacb509f087f73a981027aec9e764adf7bae5165ee7f4db4a430dcdcd',
    },
    {
      img: 'https://img.freepik.com/free-photo/close-up-woman-class_23-2148888812.jpg?size=626&ext=jpg&ga=GA1.1.176326301.1702315654&semt=ais',
    },
    {
      img: 'https://img.freepik.com/premium-photo/online-course-elearning-online-education_493343-48172.jpg?size=626&ext=jpg&ga=GA1.1.176326301.1702315654&semt=ais',
    }
  ];
      var settings = {
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000
      };
  return (
    <>

<Stack >

<Slider {...settings}>
      {sliderItems.map((ele, index) => (
        <Stack key={index} width='100%' height='100%' >
          <Box >
              

      
            <Avatar
              variant='rounded'
              src={ele.img}
              sx={{
                width: '100%', 
                height: '100%', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
      
          </Box>
        </Stack>
      ))}
    </Slider>

</Stack>

    
    </>
  )
}
