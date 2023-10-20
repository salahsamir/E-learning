import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { Avatar, ButtonBase, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

function ActionsRight() {
  const themeMode = useSelector((state) => state.ui.themeMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function avatarClickHandler() {
    if (!getAuthToken()) {
      navigate("/signin");
    }
  }
  return (
    <Stack direction="row" spacing={1}>
      <IconButton onClick={() => dispatch(uiActions.toggleThemeMode())}>
        {themeMode === "dark" && <DarkModeOutlined sx={{ fontSize: "28px" }} />}
        {themeMode !== "dark" && (
          <LightModeOutlined sx={{ fontSize: "28px" }} />
        )}
      </IconButton>
      <IconButton>
        <NotificationsNoneOutlined sx={{ fontSize: "28px" }} />
      </IconButton>
      <ButtonBase
        onClick={() => avatarClickHandler()}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "30px",
        }}
      >
        <Avatar></Avatar>
      </ButtonBase>
    </Stack>
  );
}

export default ActionsRight;
