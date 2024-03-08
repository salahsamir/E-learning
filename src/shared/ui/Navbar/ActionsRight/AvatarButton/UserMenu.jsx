import styled from "@emotion/styled";
import {
  DashboardOutlined,
  FavoriteBorder,
  LogoutOutlined,
  MailOutlineOutlined,
  PaymentOutlined,
  ScheduleOutlined,
  SchoolOutlined,
  SettingsOutlined,
  SupportOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "api/global/profile.tsx";

const SolidDvider = styled(Divider)(({ theme }) => ({
  borderColor: "#bcbcce",
  borderBottomWidth: "2px",
}));
const listItems = [
  {
    title: "My courses",
    icon: <SchoolOutlined />,
    url: "/student/courses",
  },
  {
    title: "Wishlist",
    icon: <FavoriteBorder />,
    url: "/student/wishlist",
  },
  {
    title: "Messages",
    icon: <MailOutlineOutlined />,
    url: "/student/messages",
  },
  {
    title: "My schedule",
    icon: <ScheduleOutlined />,
    url: "/student/schedule",
  },
  "divider",
  {
    title: "Settings",
    icon: <SettingsOutlined />,
    url: "/student/settings",
  },
  {
    title: "Payment",
    icon: <PaymentOutlined />,
    url: "/student/payment",
  },
  {
    title: "Support",
    icon: <SupportOutlined />,
    url: "/student/support",
  },
  {
    title: "Instructor Panel",
    icon: <DashboardOutlined />,
    url: "/instructor",
  },
  "divider",
  {
    title: "Sign Out",
    icon: <LogoutOutlined />,
    url: "/signout",
  },
];
function UserMenu() {
  let navigate = useNavigate();
  const { data: user } = useGetProfile();

  const signoutHandler = () => {
    // setImage("")
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    navigate("/signin", { replace: true });
  };

  return (
    <Paper
      sx={{
        width: "320px",
        maxWidth: "100%",
        backgroundColor: (theme) => theme.palette.background.b1,
        borderRadius: 0,
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Avatar
              src={user?.profilePic?.url}
              sx={{ width: 36, height: 36 }}
            ></Avatar>
          </ListItemIcon>
          <ListItemText
            sx={{ pl: 1 }}
            primaryTypographyProps={{
              variant: "body1",
              fontWeight: "600",
            }}
          >
            {(user?.firstName || "profile") + " " + user?.lastName}
          </ListItemText>
        </MenuItem>
        <SolidDvider />
        {listItems.map((item, index) =>
          item === "divider" ? (
            <SolidDvider key={index} />
          ) : (
            <MenuItem
              key={index}
              component={Link}
              to={item.url}
              sx={{
                "&:hover": {
                  color: "text.primary",
                },
              }}
              onClick={() => {
                if (item.url === "/signout") signoutHandler();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} color="text.secondary" />
            </MenuItem>
          )
        )}
      </MenuList>
    </Paper>
  );
}

export default UserMenu;
