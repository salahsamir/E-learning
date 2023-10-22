import styled from "@emotion/styled";
import {
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
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import React from "react";

const SolidDvider = styled(Divider)(({ theme }) => ({
  borderColor: "#bcbcce",
  borderBottomWidth: "2px",
}));

function UserMenu() {
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
            <Avatar sx={{ width: 36, height: 36 }}></Avatar>
          </ListItemIcon>
          <ListItemText sx={{ pl: 1 }}>Profile</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem>
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText>My courses</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MailOutlineOutlined />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ScheduleOutlined />
          </ListItemIcon>
          <ListItemText>My schedule</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText>Settigns</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PaymentOutlined />
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SupportOutlined />
          </ListItemIcon>
          <ListItemText>Support</ListItemText>
        </MenuItem>
        <SolidDvider />
        <MenuItem>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default UserMenu;
