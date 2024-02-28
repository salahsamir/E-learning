import styled from "@emotion/styled";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import CartModal from "Components/CartModal/CartModal";
import { allContext } from "Context/Context";
import React, { useContext, useState } from "react";

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

const CartButton = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const { cart } = useContext(allContext);
  return (
    <>
      <IconButton
        aria-label="shopping cart"
        onClick={() => setCartIsShown(true)}
        sx={{ p: "4px" }}
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
      <CartModal
        open={cartIsShown}
        onClose={() => setCartIsShown((state) => !state)}
      />
    </>
  );
};

export default CartButton;
