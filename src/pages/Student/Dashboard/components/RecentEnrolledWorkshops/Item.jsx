import { CalendarToday, ScheduleOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const Item = ({ image, title, instructorName, commingDate, sessionTime }) => {
  return (
    <Grid2 xs={12} md={6}>
      <Box
        sx={{
          padding: "16px",
          borderRadius: "8px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          display: "flex",
          gap: "12px",
          userSelect: "none",
          flexDirection: { xs: "column", sm: "row" },
          "& > img": {
            height: { xs: "160px", sm: "80px" },
            width: { xs: "100%", sm: "120px" },
            objectFit: "cover",
            borderRadius: "8px",
          },
        }}
      >
        <img src={image} alt={title} />
        <Box flex="1">
          <Typography variant="body2" color="primary.main" component={Link}>
            Web Development{" "}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            display="inline-block"
          >
            . By {instructorName}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="600"
            color="text.primary"
            component={Link}
            display="block"
          >
            {title}
          </Typography>
          <Typography
            display="flex"
            gap="4px"
            alignItems="center"
            color="text.secondary"
            component="div"
            variant="body2"
            sx={{
              mt: "4px",
              svg: {
                height: "18px",
                width: "18px",
              },
            }}
          >
            <CalendarToday />
            <span>
              {new Date().toLocaleString("en-us", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <ScheduleOutlined
              sx={{
                ml: "8px",
              }}
            />
            <span>
              {new Date().toLocaleString("en-us", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Grid2>
  );
};

export default Item;
