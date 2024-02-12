import { Container, Stack } from '@mui/material';
import React from 'react';
import ProfileLeft from '../../Components/Profile/ProfileLeft.jsx';
import ProfileRight from '../../Components/Profile/ProfileRight.jsx';

export default function Profile() {
  return (
<Stack spacing={4} my={"60px"} >

<Container className="container mx-3">
  <div className="row " border={"1px solid black"}>
    <div className="col-md-3">
      <ProfileLeft/>
    </div>
    <div className="col-md-9">
      <ProfileRight/>
    </div>
  </div>
</Container>

</Stack>
  );
}
