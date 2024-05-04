import { CalendarTodayOutlined, ScheduleOutlined } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WorkshopCard = ({ workshop }) => {
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
        src={workshop.promotionImage?.url}
        alt={workshop.title}
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
          variant="subtitle1"
          fontWeight="600"
          color="text.primary"
          component={Link}
          to={workshop._id}
          sx={{
            transition: "color ease 0.3s",
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          {workshop.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A workshop by {workshop.instructor?.userName}
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
            {new Date(workshop.startDay).toLocaleString("en-us", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
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
            {new Date(workshop.sessionTime).toLocaleString("en-us", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WorkshopCard;
