import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import DarwerItem from "./DarwerItem";
import DrawerHeader from "./DrawerHeader";
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
  width: 0,
  [theme.breakpoints.up("md")]: {
    width: "65px",
  },
});

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
const Overlay = styled(Box)(() => ({
  position: "fixed",
  left: 0,
  top: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(1px)",
  zIndex: 150,
}));
function CustomDrawer(props, ref) {
  const [open, setOpen] = useState(window.innerWidth > 1200 ? true : false);
  const { drawerItems } = props;
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 1200) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      });
    };
  }, []);

  const toggleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };
  useImperativeHandle(ref, () => ({
    toggleOpenDrawer,
  }));

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          // opacity: { xs: open ? 1 : 0, md: 1 },
          "& .MuiPaper-root": {
            backgroundColor: (theme) => theme.palette.background.b1,
            borderRight: "none",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 10px 0px",
            overflow: "visible",
          },
        }}
      >
        <DrawerHeader open={open} toggleOpenDrawer={toggleOpenDrawer} />
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
        <Overlay
          sx={{
            display: { xs: "block", lg: "none" },
          }}
          onClick={toggleOpenDrawer}
        ></Overlay>
      )}
    </>
  );
}
export default forwardRef(CustomDrawer);
