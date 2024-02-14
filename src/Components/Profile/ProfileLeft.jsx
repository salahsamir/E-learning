import { Avatar, Stack, Button, Typography, Link, Box, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseApi } from "../../util/BaseApi.js";

export default function ProfileLeft() {
  const [user, setUser] = useState(null); // Initialize user state as null
  const headers = {
    token: localStorage.getItem("token"),
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${BaseApi}/user`, { headers });
      setUser(data.newUser);
      localStorage.setItem(
        "image",
        data.newUser.profilePic?.url || "https://i.pravatar.cc/300"
      );
    } catch (err) {
      console.error("Error fetching user data:", err);
      // Display an error message to the user
      setUser({ error: "Error fetching user data. Please try again later." });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        {user && !user.error ? (
          <>
            <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
              {" "}
              <Typography variant="p" fontSize={"25px"}  >UserName: {user.userName}</Typography>
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >FullName: {user.fullName}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Email: {user.email}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Age : {user.age }</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Phone: {user.phone}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
              <Typography variant="p" fontSize={"25px"}  >Gender: {user.gender}</Typography> 
              <Divider color="primary.main" sx={{ width: "300px", }}  mb={5}/>
            
            </Box>
            <Box>
              {" "}
              <Avatar
                src={user.profilePic?.url || "https://i.pravatar.cc/300"}
                m="auto"
                sx={{ width: "200px", height: "200px" }}
              />{" "}
            </Box>
          </>
        ) : user && user.error ? (
          <Typography variant="body1" color="error">
            {user.error}
          </Typography>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Loading...
          </Typography>
        )}
      </Box>
  
    </Stack>
  );
}
