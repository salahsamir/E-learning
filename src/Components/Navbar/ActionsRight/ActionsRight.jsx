import {
    DarkModeOutlined,
    LightModeOutlined,
    NotificationsNoneOutlined,
  } from "@mui/icons-material";
  import { Avatar, ButtonBase, IconButton, Popover, Stack } from "@mui/material";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { getAuthToken } from "../../../util/auth";
  import { useDispatch, useSelector } from "react-redux";
  import { uiActions } from "../../../store/uiSlice";
  import UserMenu from "./UserMenu";
  
  function ActionsRight() {
    const themeMode = useSelector((state) => state.ui.themeMode);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function avatarClickHandler(event) {
      if (!getAuthToken()) {
        navigate("/signin");
      } else {
        setAnchorEl(event.currentTarget);
        setMenuIsOpen(true);
      }
    }
  
    return (
      <Stack direction="row" spacing={1}>
        <IconButton onClick={() => dispatch(uiActions.toggleThemeMode())}>
          {themeMode === "dark" && <DarkModeOutlined sx={{ fontSize: "28px" }} />}
          {themeMode !== "dark" && (
            <LightModeOutlined
              sx={{
                fontSize: "28px",
                color: (theme) => theme.palette.primary.svg,
              }}
            />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlined
            sx={{ fontSize: "28px", color: (theme) => theme.palette.primary.svg }}
          />
        </IconButton>
        <ButtonBase
          onClick={avatarClickHandler}
          sx={{
            backgroundColor: "transparent",
            borderRadius: "30px",
          }}
        >
          <Avatar></Avatar>
        </ButtonBase>
        <Popover
          open={menuIsOpen}
          anchorEl={anchorEl}
          sx={{ top: 12 }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={() => setMenuIsOpen(false)}
        >
          <UserMenu />
        </Popover>
      </Stack>
    );
  }
  
  export default ActionsRight;