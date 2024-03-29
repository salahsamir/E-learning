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


const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 2,
    fontSize: "0.5em",
    height: "16px",
    width: "16px",
    lineHeight: "16px",
    minWidth: "16px",
    padding: 0,
  },
}));

function ActionsRight({ cartVisible }) {
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
  function avatarClickHandler(event) {
    if (!getAuthToken()) {
      navigate("/signin/" + "?redirect=" + window.location.pathname);
    } else {
      setAvatarEl(event.currentTarget);
      setUserMenuIsOpen(true);
    }
  }

  function notifiClickHandler(event) {
    setNotifiEl(event.currentTarget);
    setNotifiMenuIsOpen(true);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const { theme: themeMode, toggleTheme } = useThemeContext();

  return (
    <>
      <CartModal
        open={cartIsShown}
        onClose={() => setCartIsShown((state) => !state)}
      />
      <Stack direction="row" alignItems="center">
        <IconButton
          sx={{ p: "4px" }}
          aria-label="theme mode"
          onClick={() => toggleTheme()}
        >
          {themeMode === "dark" && (
            <DarkModeOutlined sx={{ fontSize: "24px" }} />
          )}
          {themeMode !== "dark" && (
            <LightModeOutlined
              sx={{
                fontSize: "24px",
                color: (theme) => theme.palette.primary.svg,
              }}
            />
          )}
        </IconButton>
        {headers.token ? (
          <>
            <IconButton
              aria-label="shopping cart"
              onClick={() => setCartIsShown(true)}
              sx={{ display: cartVisible ? "block" : "none", p: "4px" }}
            >
              <CustomBadge badgeContent={cart} color="primary">
                <ShoppingCartOutlined
                  sx={{
                    fontSize: "24px",
                    color: (theme) => theme.palette.primary.svg,
                  }}
                />
              </CustomBadge>
            </IconButton>
            <IconButton
              aria-label="Heart"
              sx={{ display: cartVisible ? "block" : "none", p: "4px" }}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <CustomBadge badgeContent={wishlist} color="primary">
                <FavoriteBorder
                  sx={{
                    fontSize: "24px",
                    color: (theme) => theme.palette.primary.svg,
                  }}
                />
              </CustomBadge>
            </IconButton>
            <IconButton
              aria-label="notifications"
              onClick={notifiClickHandler}
              sx={{ p: "4px" }}
            >
              <CustomBadge badgeContent={1} color="error">
                <NotificationsNoneOutlined
                  sx={{
                    fontSize: "24px",
                    color: (theme) => theme.palette.primary.svg,
                  }}
                />
              </CustomBadge>
            </IconButton>

         <UserMenu/>
        
          </>
        ) : (
          <Box px={2}>
           <Link  to={"/signup"}>
            Registar
          </Link>
          <Link px={2}  to={"/signin"}>
            Login
          </Link>
          
          
          </Box>
        )}
      
        <Popover
          open={userMenuIsOpen}
          anchorEl={avatarEl}
          sx={{ top: 12 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={() => setUserMenuIsOpen(false)}
        >
          <UserMenu />
        </Popover>
        <Popover
          open={notifiMenuIsOpen}
          anchorEl={notifiEl}
          sx={{ top: 12 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={() => setNotifiMenuIsOpen(false)}
        >
          <NotificationsMenu />
        </Popover>
        {/* ///////////////////////////// */}
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
          {wishlistdata ? (
            <>
              <Stack spacing={1} p={1}   onClick={handleClose}>
                {wishlistdata.map((item) => (
                  <>
                    <Box
                      sx={{ display: "flex",alignItems: "center", justifyContent: "space-between",background:"#262F40",cursor:"pointer" }}
                      p={3}
                      boxShadow={2}
                      borderRadius={"5px"}
                      onClick={() => navigate(`/courseDetails/${item._id}`)}
                      

                    >
                      <Typography variant="body1" color={"primary"}>
                        {item.title}
                      </Typography>
                      <Button onClick={() => RemoveFromWishlist(item._id)}>
                        <HeartBrokenIcon color="error" fontSize="large" />
                      </Button>
                    </Box>
                    <Divider />
                  </>
                ))}
              </Stack>
            </>
          ) : (
            ""
          )}
       
        </Menu>





      </Stack>
    </>
  );
}

export default ActionsRight;
