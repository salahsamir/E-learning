import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';

export default function SliderHome() {
    const sliderItems = [
        {
          img: "https://t4.ftcdn.net/jpg/02/68/51/23/240_F_268512300_sUbrRSmEALwdMcOuJyu5F8erzNbGGKly.jpg",
          title: "Learn with us",
          description:
             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam quasi, obcaecati officiis deserunt sed ad',
        },
        {
          img: 'https://t3.ftcdn.net/jpg/03/68/49/72/240_F_368497209_kT4vf2Dk5cWcY1Ev2EsQN1qmUGPr55lg.jpg',
          title: "Learn with us",
          description:
             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam quasi, obcaecati officiis deserunt sed ad',
        },
        {
          img: "https://t3.ftcdn.net/jpg/03/71/62/58/240_F_371625853_ZlibyzmaFV4IJSVohkKgD4LSOmPpmp3B.jpg",
          title: "learn with us",
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam quasi, obcaecati officiis deserunt sed ad' ,
        },
        
      ];
      var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>

<Stack >

<Slider {...settings}> 
        {sliderItems.map((ele,index)=>
        <Stack key={index} textAlign={'center'} m={'auto'}  alignContent={'center'} width={'70vw'} height={'90vh'}>
       <Box position={'relative'}>
       <Avatar variant='rounded' src={ele.img}   sx={{ width:'100vw',backgroundSize:"cover",backgroundPosition: "100%", height:'100vh' }}/>
       <Box  position={'absolute'} top={'35%'} left={'8%'} alignItems={'center'}  width={'600px'} p={'4px'}  sx={{ backgroundColor: (theme) => theme.palette.background.default,display:{xs:"none",sm:"block"} ,borderRadius:"20px"}}>
          <Typography variant='h4' py={'5px'} color='primary'>
            {ele.title}
          </Typography>
          <Typography variant='p' >{ele.description}</Typography>
        </Box>

       </Box>
       

        </Stack>
        
        )}
    </Slider>

</Stack>

    
    </>
  )
}
