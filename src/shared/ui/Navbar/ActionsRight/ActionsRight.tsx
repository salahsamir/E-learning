import React from "react";
import { Stack } from "@mui/material";
import ThemeModeButton from "./ThemeModeButton";
import AvatarButton from "./AvatarButton";
import NotificationButton from "./NotificationButton";
import CartButton from "./CartButton";
import WishlistButton from "./WishlistButton";
import { getAuthToken } from "util/auth";
import CartItems from "Components/Nav/CartItems";
import WishlistItems from "Components/Nav/Wishlist";

function ActionsRight({
  visibleIcons = {
    wishlist: true,
    notification: true,
    cart: true,
    avatar: true,
    themeMode: true,
  },
}) {
  const authToken = getAuthToken();
  return (
    <Stack direction="row" alignItems="center">
      {visibleIcons.themeMode && <ThemeModeButton />}{" "}
      {visibleIcons.cart && <CartItems />}
      {authToken && (
        <>
          {visibleIcons.wishlist && <WishlistItems />}
          {visibleIcons.notification && <NotificationButton />}
        </>
      )}
      {visibleIcons.avatar && <AvatarButton />}
    </Stack>
  );
}

export default ActionsRight;
