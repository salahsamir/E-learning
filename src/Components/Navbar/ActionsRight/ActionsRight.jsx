import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  ButtonBase,
  IconButton,
  Popover,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/uiSlice";
import UserMenu from "./UserMenu";
import CartModal from "../../CartModal/CartModal";
import NotificationsMenu from "../../NotificationsMenu/NotificationsMenu";

function ActionsRight() {
  const themeMode = useSelector((state) => state.ui.themeMode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [avatarEl, setAvatarEl] = React.useState(null);

  const [notifiMenuIsOpen, setNotifiMenuIsOpen] = useState(false);
  const [notifiEl, setNotifiEl] = React.useState(null);

  const [cartIsShown, setCartIsShown] = useState(false);
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  function avatarClickHandler(event) {
    if (!getAuthToken()) {
      navigate("/signin");
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
          aria-label="theme mode"
          onClick={() => dispatch(uiActions.toggleThemeMode())}
        >
          {themeMode === "dark" && (
            <DarkModeOutlined sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
          )}
          {themeMode !== "dark" && (
            <LightModeOutlined
              sx={{
                fontSize: { xs: "24px", sm: "28px" },
                color: (theme) => theme.palette.primary.svg,
              }}
            />
          )}
        </IconButton>
        <IconButton
          aria-label="shopping cart"
          onClick={() => setCartIsShown(true)}
        >
          <Badge badgeContent={itemsCount} color="primary">
            <ShoppingCartOutlined
              sx={{
                fontSize: { xs: "24px", sm: "28px" },
                color: (theme) => theme.palette.primary.svg,
              }}
            />
          </Badge>
        </IconButton>
        <IconButton aria-label="notifications" onClick={notifiClickHandler}>
          <Badge
            badgeContent={1}
            color="error"
            sx={{
              "& .MuiBadge-badge": {
                right: 3,
                top: 2,
              },
            }}
          >
            <NotificationsNoneOutlined
              sx={{
                fontSize: { xs: "24px", sm: "28px" },
                color: (theme) => theme.palette.primary.svg,
              }}
            />
          </Badge>
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
            sx={{
              height: { xs: "30px", sm: "40px" },
              width: { xs: "30px", sm: "40px" },
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
