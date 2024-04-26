import { HeartBroken } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { allContext } from "Context/Context";
import React, { useContext } from "react";
const WishlistMenu = () => {
  const { wishlistdata, RemoveFromWishlist } = useContext(allContext);
  return (
    <Stack spacing={1} p={1}>
      {wishlistdata.map((item) => (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            p={1}
            boxShadow={1}
          >
            <Typography variant="body1" color={"primary"}>
              {item.title}
            </Typography>
            <Button onClick={() => RemoveFromWishlist(item._id)}>
              <HeartBroken color="error" />
            </Button>
          </Box>
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default WishlistMenu;
