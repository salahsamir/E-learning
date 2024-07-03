import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ course }) => {
  return (
    <Box
      className="custom-slide-item1"
      sx={{
        flex: 1,
        minWidth: "295px",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <img
        src={course?.coverImageUrl}
        alt={course?.title}
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />
      <Box padding="16px">
        <Typography variant="body2" color="text.secondary">
          A Course By {course?.createdBy?.userName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          component={Link}
          to={"courseDetails/" + course._id}
          fontWeight="600"
          sx={{
            transition: "color ease 0.2s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {course?.title}
        </Typography>
        <Box className="flex items-center justify-between" mt="0.25em">
          <Rating
            value={course?.rating}
            precision={0.25}
            size="small"
            readOnly
          />
          <Typography fontWeight="600">{course?.price} EGP</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
