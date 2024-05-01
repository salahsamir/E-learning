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
  // {
  //   title: "Wishlist",
  //   icon: <FavoriteBorder />,
  //   url: "/student/wishlist",
  // },
  {
    title: "Messages",
    icon: <MailOutlineOutlined />,
    url: "/student/messages",
  },
  // {
  //   title: "My schedule",
  //   icon: <ScheduleOutlined />,
  //   url: "/student/schedule",
  // },
  {
    title: "Payment",
    icon: <PaymentOutlined />,
    url: "/student/payment",
  },
  "divider",
  {
    title: "Settings",
    icon: <SettingsOutlined />,
    url: "/student/settings",
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
  const { data: user } = useGetProfile();
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
            {user?.userName || "profile"}
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
