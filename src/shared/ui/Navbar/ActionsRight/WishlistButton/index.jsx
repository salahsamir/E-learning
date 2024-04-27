import styled from "@emotion/styled";
import { FavoriteBorder } from "@mui/icons-material";
import { Badge, IconButton, Popover } from "@mui/material";
import { allContext } from "Context/Context";
import React, { useContext } from "react";
import WishlistMenu from "./WishlistMenu";

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

const WishlistButton = () => {
  const { wishlist } = useContext(allContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [wishlistMenuIsOpen, setWishlistMenuIsOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setWishlistMenuIsOpen(true);
  };

  return (
    <>
      <IconButton aria-label="wishlist" sx={{ p: "4px" }} onClick={handleClick}>
        <CustomBadge badgeContent={wishlist} color="primary">
          <FavoriteBorder
            sx={{
              fontSize: "24px",
              color: (theme) => theme.palette.primary.svg,
            }}
          />
        </CustomBadge>
      </IconButton>
      <Popover
        open={wishlistMenuIsOpen}
        anchorEl={anchorEl}
        sx={{ top: 12 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() => setWishlistMenuIsOpen(false)}
      >
        <WishlistMenu />
      </Popover>
    </>
  );
};

export default WishlistButton;
