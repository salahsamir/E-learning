import React, { useEffect, useState } from 'react';
import { IconButton, Badge, Popover, ButtonBase, Avatar, Stack } from '@mui/material';
import { Favorite, NotificationsNoneOutlined, ShoppingCartOutlined, DarkModeOutlined, LightModeOutlined, FavoriteBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import UserMenu from './UserMenu';
import CartModal from '../../CartModal/CartModal';
import NotificationsMenu from '../../NotificationsMenu/NotificationsMenu';
import styled from '@emotion/styled';
import axios from 'axios';
import { BaseApi } from '../../../util/BaseApi.js';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../../util/auth';

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
  const themeMode = useSelector((state) => state.ui.themeMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [avatarEl, setAvatarEl] = useState(null);

  const [notifiMenuIsOpen, setNotifiMenuIsOpen] = useState(false);
  const [notifiEl, setNotifiEl] = useState(null);

  const [cartIsShown, setCartIsShown] = useState(false);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const [wishlistCount, setWishlistCount] = useState(0);
  const headers = {
    token: localStorage.getItem('token')
  };

  useEffect(() => {
    async function fetchWishlistCount() {
      try {
        const response = await axios.get(`${BaseApi}/user/wishlist`, { headers });
        setWishlistCount(response.data.wishlist.length);
      } catch (error) {
        console.error('Error fetching wishlist count:', error);
      }
    }

    fetchWishlistCount();
  }, [headers]);

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
          onClick={() => dispatch(uiActions.toggleThemeMode())}
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

        <IconButton
          aria-label="shopping cart"
          onClick={() => setCartIsShown(true)}
          sx={{ display: cartVisible ? "block" : "none", p: "4px" }}
        >
          <CustomBadge badgeContent={itemsCount} color="primary">
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
        >
          <CustomBadge badgeContent={wishlistCount} color="primary">
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
        <ButtonBase
          aria-label="user menu"
          onClick={avatarClickHandler}
          sx={{
            backgroundColor: "transparent",
            borderRadius: "30px",
            ml: 1,
          }}
        >
          <Avatar
            src={localStorage.getItem("image")}
            sx={{
              height: "30px",
              width: "30px",
            }}
          ></Avatar>
        </ButtonBase>
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
      </Stack>
    </>
  );
}

export default ActionsRight;
