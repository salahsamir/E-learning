
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

        <Stack spacing={2}  py={5} my={4} container>
          <div  className="row g-2">
            <div className="col-md-4">
            <Box p={2} borderRadius={2} position="relative" className={`PerentHomeSection`} color="white">
      <Box
        sx={{
          backgroundColor: '#27c985', // Correct syntax for setting background color
    width: '60px',
    
        }}
        my={2}
        
      >
        <HouseSidingIcon sx={{ fontSize: '60px' }} />
      </Box>
      <Typography variant="h5">Our Vision</Typography>
      <Typography variant="p">We envision a future where education is not confined to traditional boundaries but extends beyond classrooms, reaching every corner of the globe. We believe in a world where learning is personalized, inclusive.</Typography>
      <Box className={`HomeSection`}>
        <HouseSidingIcon sx={{ fontSize: '350px' }} />
      </Box>
    </Box>
           
            </div>
            <div className="col-md-4">
            <Box p={2} borderRadius={2} position="relative" className={`PerentHomeSection`} color="white">
      <Box
        sx={{
          backgroundColor: '#27c985', // Correct syntax for setting background color
    width: '60px'
        }}
        my={2}
        
      >
        <AccountBalanceOutlinedIcon sx={{ fontSize: '60px' }} />
      </Box>
      <Typography variant="h5">Our Mission</Typography>
      <Typography variant="p">Our mission is to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity.</Typography>
      <Box className={`HomeSection`}>
        <AccountBalanceOutlinedIcon sx={{ fontSize: '350px' }} />
      </Box>
    </Box>
           
            </div>
            <div className="col-md-4">
          
            <Box p={2} borderRadius={2} position="relative" className={`PerentHomeSection`} color="white">
      <Box
        sx={{
          backgroundColor: '#27c985', // Correct syntax for setting background color
    width: '60px'
        }}
        my={2}
        
      >
        < EmojiEventsOutlinedIcon sx={{ fontSize: '60px' }} />
      </Box>
      <Typography variant="h5">Our Achievement</Typography>
      <Typography variant="p">our achievementis to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity.</Typography>
      <Box className={`HomeSection`}>
        < EmojiEventsOutlinedIcon sx={{ fontSize: '350px' }} />
      </Box>
    </Box>
      
           
            </div>
            
          </div>

        </Stack>
        {/* <Grid spacing={3} container>
          <Grid item sm={6}>
            <Stack
              justifyContent={"center"}
              sx={{ width: "90%", height: "100%" }}
              data-aos="fade-right"
              color='secondary.main'
            >
              <Typography variant="h6">
             <Typography fontWeight={'bold'} variant="h5"> Our Vision</Typography>
We envision a future where education is not confined to traditional boundaries but extends beyond classrooms, reaching every corner of the globe. We believe in a world where learning is personalized, inclusive.
<Typography fontWeight={'bold'} variant="h5">Our Mission</Typography>

Our mission is to harness the power of innovation to redefine education for the 21st century. We strive to create dynamic learning experiences that inspire curiosity.
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Avatar
              data-aos="fade-left"
              variant="rounded"
              sx={{ width: "90%", height: "100%" }}
              alt="Remy Sharp"
              src="https://pinlearn.com/wp-content/uploads/2020/11/Group-Webinar-Class-1536x946.png"
            />
          </Grid>
        </Grid> */}
      </Stack>
  
  </>
  )
}
