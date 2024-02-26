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
  ListItemIcon,
  ListItemText,
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
 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const {image,setImage}=useContext(allContext)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

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
  const Setting=()=>{
    nav("/setting", { replace: true })
    handleClose()
  }
  return (
    <Paper
      sx={{
        width: "320px",
        maxWidth: "100%",
        backgroundColor: (theme) => theme.palette.background.b1,
        borderRadius: 0,
      }}
    >

      <MenuList  autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
        <MenuItem  onClick={()=>{Profile()}}>
          <ListItemIcon >
            <Avatar src={image} sx={{ width: 36, height: 36 }}></Avatar>
          </ListItemIcon>
          <ListItemText sx={{ pl: 1 }}>Profile</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText>My courses</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MailOutlineOutlined />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PaymentOutlined />
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
    </Paper>
  );
}

export default UserMenu;
