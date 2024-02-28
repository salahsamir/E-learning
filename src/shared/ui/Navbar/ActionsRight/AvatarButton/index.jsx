import { Avatar, ButtonBase, Popover } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "util/auth";
import UserMenu from "./UserMenu";
import { allContext } from "Context/Context";

const AvatarButton = () => {
  const navigate = useNavigate();
  const [avatarEl, setAvatarEl] = useState(null);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const { image: avatarImage } = useContext(allContext);
  function avatarClickHandler(event) {
    if (!getAuthToken()) {
      navigate("/signin?redirect=" + window.location.pathname);
    } else {
      setAvatarEl(event.currentTarget);
      setUserMenuIsOpen(true);
    }
  }

  return (
    <>
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
          src={avatarImage}
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
    </>
  );
};

export default AvatarButton;
