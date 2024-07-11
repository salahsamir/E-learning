import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({
  image,
  instructorName,
  title,
  finishedResources,
  allResources,
}) => {
  const percentage = (+finishedResources / +allResources) * 100;
  return (
    <Box
      className="custom-slide-item"
      sx={{
        flex: 1,
        minWidth: "300px",
        maxWidth: "330px",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />
      <Box padding="16px">
        <Typography variant="body2" color="text.secondary">
          A Course By {instructorName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          component={Link}
          to="courses"
          fontWeight="600"
          sx={{
            transition: "color ease 0.2s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {title}
        </Typography>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            my="8px"
          >
            <Typography variant="body2" color="text.primary">
              {percentage}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
                fontWeight="600"
              >
                {finishedResources + " "}
              </Typography>
              / {allResources} lessons
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              borderRadius: "100px",
              height: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
