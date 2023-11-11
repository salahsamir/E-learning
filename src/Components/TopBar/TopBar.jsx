import { Button, Stack ,Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import Link from '@mui/material/Link';
import {  Link as RouterLink } from "react-router-dom";
function TopBar({ display }) {
  return (
    <Stack>
      <Stack
        justifyContent="center"
        direction="row"
        alignItems="center"
        height="50px"
        width="100%"
        position={"fixed"}
        zIndex={100}
        display={display}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          borderBottom: "1px solid #bcbcce22",
        }}
      >
    
  <Breadcrumbs aria-label="breadcrumb" separator={' '}>
  <Link underline="none" color="inherit"  component={RouterLink} to={`/course/Web Development`} >
  Web Development
  </Link>
  <Link underline="none" color="inherit"  component={RouterLink} to={`course/Data Science`}>
  Data Science
  </Link>
  <Link underline="none" color="inherit"  component={RouterLink} to={`/course/Mobile Development`}>
  Mobile Development
  </Link>
  <Link underline="none" color="inherit"  component={RouterLink} to={`/course/Database Design`}>
  Database Design
  </Link>
  <Link underline="none" color="inherit"  component={RouterLink} to={`/course/Software Testing`}>
  Software Testing
  </Link>


</Breadcrumbs>
       
      
      </Stack>
    
</Stack>
 
  );
}

export default TopBar;
