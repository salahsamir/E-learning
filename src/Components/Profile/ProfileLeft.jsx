import { Avatar, Stack, Button, Typography, Link, Box, Divider } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseApi } from "../../util/BaseApi.js";
import { allContext } from "../../Context/Context.jsx";

export default function ProfileLeft() {


  const {userdata,image}=useContext(allContext)
<<<<<<< HEAD
  console.log(userdata,image)
=======
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
 
  return (
    <Stack spacing={2}  width="100%" height="100%" textAlign="center" m="auto">
      <Typography variant="h2" color="primary" fontWeight="bold">
        Profile
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={2}
        borderRadius={"5px"}
        boxShadow={"0 0 15px 0 rgba(0, 0, 0, 0.4)"}
        width={"65%"}
        transform={"translateX(-50%)"}
        position={"relative"}
        left={"20%"}
      >
        {userdata && !userdata.error ? (
          <>
            <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
              {" "}
              <Typography variant="p" fontSize={"25px"}  >UserName: {userdata.userName}</Typography>
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >FullName: {userdata.fullName}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Email: {userdata.email}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Age : {userdata.age }</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Phone: {userdata.phone}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Gender: {userdata.gender}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
            
            </Box>
            <Box>
              {" "}
              <Avatar
                src={image || "https://i.pravatar.cc/300"}
                m="auto"
                sx={{ width: "200px", height: "200px" }}
              />{" "}
            </Box>
          </>
        ) : userdata ? <Typography>{userdata.error}</Typography> : (
          <Typography variant="body1" color="textSecondary">
            Loading...
          </Typography>
        )}
      </Box>
  
    </Stack>
  );
}
