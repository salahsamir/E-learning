import styled from "@emotion/styled";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton, Link, ListItem, Typography } from "@mui/material";
import logo from "assets/images/logo.png";
import React from "react";
const StyledDrawerHeader = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "flex-end",
  padding: 0,
  transition: "all 1s ease",
  position: "relative",
}));

const DrawerHeader = ({ open, toggleOpenDrawer }) => {
  return (
    <StyledDrawerHeader
      sx={{ display: { xs: open ? "flex" : "none", md: "flex" } }}
    >
      <ListItem
        disablePadding
        sx={{
          minHeight: "70px",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Link
          to={"/"}
          underline="none"
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: open ? "initial" : "center",
          }}
        >
          <Box
            sx={{
              height: "65px",
              width: "65px",
              display: { xs: open ? "flex" : "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>

          <Typography
            fontWeight="800"
            fontSize="1.5rem"
            component="p"
            sx={{
              color: (theme) => theme.palette.primary.main,
              display: open ? "flex" : "none",
            }}
          >
            Eduvation
          </Typography>
        </Link>
        <IconButton
          onClick={toggleOpenDrawer}
          sx={{
            display: { xs: "flex", lg: "none" },
            position: "absolute",
            right: "-15px",
            width: "30px",
            height: "30px",
          }}
        >
          {!open && (
            <ArrowCircleRight
              sx={{
                fontSize: "25px",
                color: (theme) => theme.palette.primary.main,
              }}
            />
          )}
          {open && (
            <ArrowCircleLeft
              sx={{
                fontSize: "25px",
                color: (theme) => theme.palette.primary.main,
              }}
            />
          )}
        </IconButton>
      </ListItem>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
