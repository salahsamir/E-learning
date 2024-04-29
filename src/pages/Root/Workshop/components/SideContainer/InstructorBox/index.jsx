import {
  ChevronRight,
  PeopleAlt,
  PlayCircle,
  Star,
  Verified,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AvatarBox from "../../AvatarBox";
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
const InstructorBox = () => {
  return (
    <Box
      color="text.secondary"
      padding="16px"
      sx={{
        backgroundColor: "background.b1",
        borderRadius: "16px",
      }}
    >
      {/* ************************ Header ************************ */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="16px"
      >
        <Typography variant="h6" color="text.primary">
          Instructor
        </Typography>
        <Button
          aria-label="view profile"
          variant="text"
          sx={{
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.primary",
            },
          }}
        >
          View profile <ChevronRight />
        </Button>
      </Box>
      {/* ************************ Avatar Box ************************ */}
      <AvatarBox />
      <Typography variant="body2" my="8px">
        I'm a passionate software engineer with a keen interest in leveraging
        technology to solve real-world problems. With 5 years of experience in
        the field, I've cultivated a deep understanding of software development
        principles and best practices.
      </Typography>
      {/* ************************ achievements list ************************ */}
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
        <ListItem icon={<Star />} title="4.8 instructor rating" />
        <ListItem icon={<Verified />} title="800 Reviews" />
        <ListItem icon={<PeopleAlt />} title="4500 Students" />
        <ListItem icon={<PlayCircle />} title="7 Courses" />
      </Box>
    </Box>
  );
};

export default InstructorBox;
