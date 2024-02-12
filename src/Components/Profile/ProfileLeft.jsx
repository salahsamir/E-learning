import { Avatar, Stack, Button, Typography, Link } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseApi } from '../../util/BaseApi.js'

export default function ProfileLeft() {
   let [user, setUser] = useState([])
   let headers = {
    token: localStorage.getItem('token')
   }
   
   let getUser = async () => {
    try {
        let { data } = await axios.get(`${BaseApi}/user`, { headers })
        setUser(data.user)
        localStorage.setItem("image", data.user.profilePic?.url || "https://i.pravatar.cc/300")
    } catch (err) {
        console.log(err)
    }
   }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Stack spacing={2}  p={2} width={"100%"} height={"100%"}  >
        {user ? (
            <>
                <Avatar src={user.profilePic?.url || "https://i.pravatar.cc/300"} sx={{ width: "200px", height: "200px", m: "auto", mx: "auto" }} />
                <Typography variant='h6' color='primary' my={2}>Name : {user.userName}</Typography>
                <Link variant='p' color={"secondary.main"} my={2}>{user.email}</Link>
                <Button variant='contained' my={2} color='error'>Edit Profile</Button>
            </>
        ) : (
            ""
        )}
    </Stack>
  )
}
