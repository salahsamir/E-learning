import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Analytics,
  ArrowCircleLeft,
  ArrowCircleRight,
  AttachMoney,
  Comment,
  Dashboard,
  Groups,
  Settings,
  VideoLibrary,
} from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import DarwerItem from "./DarwerItem";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: 0,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function CustomDrawer(props, ref) {
  const [open, setOpen] = useState(window.innerWidth > 1200 ? true : false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });
  const toggleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };
  useImperativeHandle(ref, () => ({
    toggleOpenDrawer,
  }));
  const drawerItems = [
    { text: "Dashboard", icon: <Dashboard />, url: "/instructor" },
    { text: "Courses", icon: <VideoLibrary />, url: "courses" },
    { text: "Workshops", icon: <Groups />, url: "workshops" },
    { text: "Analytics", icon: <Analytics />, url: "analytics" },
    { text: "Comments", icon: <Comment />, url: "comments" },
    { text: "Revenue", icon: <AttachMoney />, url: "revenue" },
    { text: "Settings", icon: <Settings />, url: "settings" },
  ];
  return (
    <Box
      sx={{
        display: { xs: open ? "flex" : "none", md: "flex" },
      }}
    >
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: (theme) => theme.palette.background.b1,
            borderRight: "none",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 10px 0px",
            overflow: "visible",
          },
        }}
      >
        <DrawerHeader>
          <ListItem
            disablePadding
            sx={{
              minHeight: "70px",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Link
              component={RouterLink}
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
                  display: "flex",
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
                  display: open ? "block" : "none",
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
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item) => (
            <DarwerItem
              key={item.text}
              text={item.text}
              url={item.url}
              icon={item.icon}
              open={open}
            />
          ))}
        </List>
      </Drawer>
      {open && (
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(1px)",
            zIndex: 150,
            display: { xs: "block", lg: "none" },
          }}
          onClick={toggleOpenDrawer}
        ></Box>
      )}
    </Box>
  );
}
export default forwardRef(CustomDrawer);
