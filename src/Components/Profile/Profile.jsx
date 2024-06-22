import { Avatar, Stack, Button, Typography, Link, Box, Divider } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseApi } from "../../util/BaseApi.js";
import { allContext } from "../../Context/Context.jsx";

export default function ProfileLeft() {
  const {userdata,image}=useContext(allContext)
  
  return (
   <div>
    <h2 className="text-4xl py-2  text-green-500 text-center  mt-5">Your Profile</h2>
    <div className="w-3/4 mx-auto  shadow-lg rounded-md   p-2">
        {userdata?
      <div className=" ">
        <div className="image">
          <img src={userdata.profilePic?.url} className="w-80 h-80 rounded-full object-cover m-auto my-3" alt="" />
        </div>
        <div className="data m-auto text">
          <h5 className="text-slate-200  text-3xl"> 
            Name: {userdata.userName}
          </h5>
          <h5 className="text-slate-200  text-3xl">
            Email: {userdata.email}
          </h5>
          <h5 className="text-slate-200  text-3xl">
            Gender: {userdata.gender||''}
          </h5>
          <h5 className="text-slate-200  text-3xl">
            Phone: {userdata.phone||''}
          </h5>
        </div>

       


      </div>
:""

        }

    </div>
   </div>
  );
}
