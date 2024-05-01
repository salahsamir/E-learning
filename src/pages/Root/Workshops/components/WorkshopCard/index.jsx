import { CalendarTodayOutlined, ScheduleOutlined } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WorkshopCard = () => {
  const data = {
    title: "How to start a business",
    image:
      "https://www.companywebcast.com/wp-content/uploads/unlimited-online-audience.jpg?x59338",
    instructor: "Ali Mohamed",
    startDate: "July 20, 2024",
    time: "03:30 PM",
  };
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        backgroundColor: "background.b1",
        overflow: "hidden",
        p: {
          userSelect: "none",
        },
      }}
    >
      <img
        src={data.image}
        alt={data.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          borderRadius: 0,
          transition: "all ease 0.3s",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          component={Link}
          sx={{
            transition: "color ease 0.3s",
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A workshop by {data.instructor}
        </Typography>
        <Divider
          sx={{
            my: "4px",
            backgroundColor: (theme) => theme.palette.divider,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            color="text.secondary"
            variant="caption"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CalendarTodayOutlined
              fontSize="small"
              sx={{
                height: "16px",
                width: "16px",
              }}
            />
            {data.startDate}
          </Typography>
          <Typography
            color="text.secondary"
            variant="caption"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <ScheduleOutlined
              sx={{
                height: "16px",
                width: "16px",
              }}
            />
            {data.time}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WorkshopCard;
