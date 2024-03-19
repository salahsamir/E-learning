import styled from "@emotion/styled";

import {
  LogoutOutlined,
  MailOutlineOutlined,
  PaymentOutlined,
  ScheduleOutlined,
  SchoolOutlined,
  SettingsOutlined,
  SupportOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { allContext } from "../../../Context/Context.jsx";

const SolidDvider = styled(Divider)(({ theme }) => ({
  borderColor: "#bcbcce",
  borderBottomWidth: "2px",
}));

function UserMenu() {
  let nav=useNavigate()
 
  const {image}=useContext(allContext)

  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signoutHandler = () => {
    // setImage("")
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    
    
    nav("/signin", { replace: true });
    handleClose()
  };
  const Profile=()=>{
    nav("/profile", { replace: true });
    handleClose()
  }
  const MyCourses=()=>{
    nav("/mycourse")
    handleClose()
  }
  const Setting=()=>{
    nav("/setting", { replace: true })
    handleClose()
  }
  return (
   <>
   
   <IconButton
              aria-label="Heart"
            //   sx={{ display: cartVisible ? "block" : "none", p: "4px" }}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              
              <Avatar
            src={image}
            sx={{
              height: "30px",
              width: "30px",
            }}
          ></Avatar>
            </IconButton>
   
            <Menu
          // m={2}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ marginTop: 3}}
        >
           

      <MenuList  sx={{width: "320px",
        maxWidth: "100%"}}  autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    >
        <MenuItem  onClick={()=>{Profile()}}>
          <ListItemIcon >
            <Avatar src={image} sx={{ width: 36, height: 36 }}></Avatar>
          </ListItemIcon>
          <ListItemText sx={{ pl: 1 }}>Profile</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem onClick={()=>{MyCourses()}}>
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText>My courses</ListItemText>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <MailOutlineOutlined />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <ScheduleOutlined />
          </ListItemIcon>
          <ListItemText>My schedule</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem onClick={() => {Setting()}}>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText>Settigns</ListItemText>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <PaymentOutlined />
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <SupportOutlined />
          </ListItemIcon>
          <ListItemText>Support</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem  onClick={signoutHandler}>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </MenuList>

       
        </Menu>
   

   
   
   </>
  );
}

export default UserMenu;
