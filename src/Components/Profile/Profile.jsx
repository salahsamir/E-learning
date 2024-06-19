import { Avatar, Stack, Button, Typography, Link, Box, Divider } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseApi } from "../../util/BaseApi.js";
import { allContext } from "../../Context/Context.jsx";

export default function ProfileLeft() {
  const {userdata,image}=useContext(allContext)
  console.log(userdata)
 
  return (
   <div>
    <h2 className="text-4xl py-2  text-green-500 text-center  mt-5">Your Profile</h2>
    <div className="w-3/4 mx-auto mt-5 shadow-lg border border-spacing-2 rounded-md  border-l-fuchsia-800 p-2">
        {userdata?
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="image">
          <img src={userdata.profilePic?.url} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="data">
          <h5 className="text-slate-200  text-1xl"> 
            Name: {userdata.userName}
          </h5>
          <h5 className="text-slate-200  text-1xl">
            Email: {userdata.email}
          </h5>
          <h5 className="text-slate-200  text-1xl">
            Gender: {userdata.gender||''}
          </h5>
          <h5 className="text-slate-200  text-1xl">
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
