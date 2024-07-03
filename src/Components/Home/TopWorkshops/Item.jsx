import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ workshop }) => {
  return (
    <Box
      className="custom-slide-item2"
      sx={{
        flex: 1,
        minWidth: "295px",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <img
        src={workshop?.promotionImage?.url}
        alt={workshop?.title}
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />
      <Box padding="16px">
        <Typography variant="body2" color="text.secondary">
          A workshop By {workshop?.instructor?.userName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          component={Link}
          to={"workshops/" + workshop._id}
          fontWeight="600"
          sx={{
            transition: "color ease 0.2s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {workshop?.title}
        </Typography>
        <Box className="flex items-center justify-between" mt="0.25em">
          <Typography>
            {new Date(workshop.startDay).toLocaleString("en-us", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </Typography>
          <Typography fontWeight="600">{workshop?.price} EGP</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
