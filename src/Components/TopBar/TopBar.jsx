import { Button, Stack ,Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from '@mui/material/Link';
import {  Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { BaseApi } from "../../util/BaseApi.js";
function TopBar({ display }) {
   
  let [category,setCategory]=useState([])
  let getAllCategory=async()=>{
    let response=await axios.get(`${BaseApi}/category`)
    .catch((err)=>{
      console.log(err)
    })
    setCategory(response.data.category)
    // console.log(category);
  }
 useEffect(()=>{
  getAllCategory()
 })


  return (
    <Stack>
      <Stack
        justifyContent="center"
        direction="row"
        alignItems="center"
        height="35px"
        width="100%"
        position={"fixed"}
        zIndex={100}
        display={display}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          // borderBottom: "1px solid #bcbcce22",
        }}
      >
    

    {category?<>
  <Breadcrumbs aria-label="breadcrumb" separator={''} maxItems={10}>
   
    {category.map((item)=>{

      return <Link underline="none" color="inherit"   component={RouterLink} to={`/course/${item.id}`} >
      {item.name}
       </Link>
    })}
   
    </Breadcrumbs>
    
    </>:" "}
 
 


       
      
      </Stack>
    
</Stack>
 
  );
}

export default TopBar;
