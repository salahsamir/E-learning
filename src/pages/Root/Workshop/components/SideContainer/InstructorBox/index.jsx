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
const InstructorBox = ({ instructor }) => {
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
      <AvatarBox
        name={instructor?.userName}
        image={instructor?.profilePic?.url}
        occupation={instructor?.occupation}
      />
      <Typography variant="body2" my="8px">
        {instructor.about?.length > 313
          ? instructor.about?.slice(0, 313) + "..."
          : instructor.about}
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
        <ListItem
          icon={<Star />}
          title={(instructor.rating || "unkown") + " instructor rating"}
        />
        <ListItem
          icon={<Verified />}
          title={(instructor.reviews || "unknown") + " Reviews"}
        />
        <ListItem
          icon={<PeopleAlt />}
          title={(instructor.totalNumberOfStudents || "unkown") + " Students"}
        />
        <ListItem
          icon={<PlayCircle />}
          title={(instructor.totalNumberOfCourses || "unkown") + " Courses"}
        />
      </Box>
    </Box>
  );
};

export default InstructorBox;
