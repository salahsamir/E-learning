import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';

export default function SliderHome() {
  const sliderItems = [
    {
      img: process.env.PUBLIC_URL + '/HomeSlider/_41f6e389-9301-4690-8414-e85bd7cb6a9e.jpg',
    },
    {
      img: process.env.PUBLIC_URL + '/HomeSlider/_aa4af19d-73bf-4e67-8aa1-7bdb77db397a.jpg',
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
        <Stack key={index} textAlign={'center'} m={'auto'} alignContent={'center'} >
          <Box position={'relative'}>
           
            <Avatar
              variant='rounded'
              src={ele.img}
              sx={{
                width: '100vw', 
                height: '100vh', 
                backgroundSize: 'cover',
                backgroundPosition: '100%',
                position: 'relative',
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
