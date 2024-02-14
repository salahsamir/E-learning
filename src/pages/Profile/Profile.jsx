import { Container, Stack } from '@mui/material';
import React from 'react';
import ProfileLeft from '../../Components/Profile/ProfileLeft.jsx';


export default function Profile() {
  return (
<Stack spacing={4} my={"55px"} py={2} >

<Container className="container mx-3">
  
      <ProfileLeft/>
    
   
</Container>

</Stack>
  );
}
