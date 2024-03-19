import React, { useContext, useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  ButtonBase,
  Avatar,
  Stack,
  Menu,
  Typography,
  Box,
  Button,
  Divider,
  Link,
} from "@mui/material";
import {
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import UserMenu from "./UserMenu";
import CartModal from "../../CartModal/CartModal";
import NotificationsMenu from "../../NotificationsMenu/NotificationsMenu";
import styled from "@emotion/styled";
import { getAuthToken } from "../../../util/auth";
import { useNavigate } from "react-router-dom";
import { allContext } from "../../../Context/Context.jsx";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useThemeContext } from "Context/theme-context.tsx";

export default function AccountMenu() {
    const navigate = useNavigate();
    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const [avatarEl, setAvatarEl] = useState(null);
    const [notifiMenuIsOpen, setNotifiMenuIsOpen] = useState(false);
    const [notifiEl, setNotifiEl] = useState(null);
    const [cartIsShown, setCartIsShown] = useState(false);
    const { image, wishlist, wishlistdata, RemoveFromWishlist, cart } =
      useContext(allContext);
    let headers = {
      token: getAuthToken(),
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    let nav=useNavigate()
   

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
          sx={{ marginTop: 3 }}
        >
          
       
        </Menu>
   
   </>
  );
}
