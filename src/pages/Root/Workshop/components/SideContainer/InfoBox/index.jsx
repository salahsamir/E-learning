import {
  CheckOutlined,
  FavoriteBorderOutlined,
  GroupsOutlined,
  PlayCircleOutlineOutlined,
  StayPrimaryPortraitOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
const ListItem = ({ icon, title }) => {
  return (
    <Typography
      variant="body2"
      component="li"
      color={"text.secondary"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        "& svg": {
          height: "18px",
          width: "18px",
        },
      }}
    >
      {icon}
      {title}
    </Typography>
  );
};
const InfoBox = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "background.b1",
        borderRadius: "16px",
      }}
    >
      <Typography color="text.secondary" variant="body2" mb="4px">
        Full Access
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "8px",
        }}
      >
        <Typography variant="h4" color="text.primary" fontWeight="600">
          350 EGP
        </Typography>
      </Box>
      {/* ******************** Workshop Includes ******************** */}
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="body1" fontWeight="600">
          Workshop Includes
        </Typography>
        <ListItem icon={<GroupsOutlined />} title={"12 Live Sessions"} />
        <ListItem
          icon={<PlayCircleOutlineOutlined />}
          title={"Recorded Sessions"}
        />

        <ListItem
          icon={<StayPrimaryPortraitOutlined />}
          title={"Mobile Version"}
        />
        <ListItem
          icon={<WorkspacePremiumOutlined />}
          title={"Certificate of completion"}
        />
      </Box>
      {/* ******************** Checkout Box ******************** */}
      <Box my="16px" display="flex" gap="8px">
        <Button
          variant="contained"
          sx={{
            flex: 1,
          }}
        >
          Add To Cart
        </Button>
        <Button
          variant="outlined"
          sx={{
            minHeight: 0,
            minWidth: 0,
            padding: "8px",
          }}
        >
          <FavoriteBorderOutlined />
        </Button>
      </Box>
      {/* ******************** Coupon Box ******************** */}
      <Box display="flex">
        <TextField
          placeholder="Enter Coupon"
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              "&:hover": {},
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          Apply
        </Button>
      </Box>
      <Typography
        color="text.secondary"
        variant="body2"
        mt="16px"
        display="flex"
        alignItems="center"
        gap="4px"
      >
        <CheckOutlined /> 7-Days money-back guarantee
      </Typography>
    </Box>
  );
};

export default InfoBox;
