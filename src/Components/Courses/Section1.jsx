import { Button, Stack ,Breadcrumbs, Typography, Grid, Avatar, Paper, Box,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import React, { useState } from "react";
import Link from '@mui/material/Link';
import {  Link as RouterLink } from "react-router-dom";

export default function Section1({value}) {

 let [course,setCourse]=useState('')

  return (
  
     <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
          <Box sx={{ maxWidth:"100%",margin:"auto"}}>
          <List sx={{position:"fixed"}}>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" to={`/${value}/all`}>
              <ListItemText primary="All"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#profile">
             
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#work">
             
              <ListItemText primary="Tailwind" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#friend">
          
              <ListItemText primary="Nodejs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#setting">
           
              <ListItemText primary="Java script" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#dark">
            <ListItemText primary="Nextjs" />
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="RouterLink" href="#dark">
            <ListItemText primary="Mongoodb" />
             
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
       
     </Box>
  
     

  
  
   

  )
}
