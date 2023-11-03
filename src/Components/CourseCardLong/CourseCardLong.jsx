import styled from "@emotion/styled";
import {
  AccessTimeOutlined,
  AutoStoriesOutlined,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  Divider,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "150px",
  borderRadius: 4,
}));

function CourseCard({ course }) {
  const [favorite, setFavorite] = React.useState(course.favorite || false);
  const dispatch = useDispatch();
  function addToCart() {
    console.log(course);
    dispatch(cartActions.addToCart(course));
  }
  return (
    <Paper
      elevation={0}
      sx={{
        width: "280px",
        height: "100%",
        padding: 2,
        borderRadius: 4,
        backgroundColor: "background.b1",
        position: "relative",
      }}
      key={course.id}
    >
      <Image src={course.image} alt={course.title} />
      <Chip
        // color="primary.main"
        label={`$${course.price}`}
        sx={{
          position: "absolute",
          top: 125,
          right: 25,
          backgroundColor: "primary.main",
          color: (theme) => (theme.palette.mode === "light" ? "#fff" : "#000"),
          fontWeight: "600",
          fontSize: "0.8em",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <Stack direction="row" gap={2} alignItems="center">
          <Avatar src={course.instructorImg} alt={course.instructorName} />
          <Stack>
            <Typography variant={"body2"} fontSize="0.8em" fontWeight="600">
              {course.instructorName}
            </Typography>
            <Typography
              variant={"body2"}
              fontSize="0.6em"
              fontWeight="600"
              color="text.secondary"
            >
              {course.instructorJob}
            </Typography>
          </Stack>
        </Stack>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={favorite}
          name="favorite"
          aria-label="add to wishlist"
          onClick={() => setFavorite((state) => !state)}
        />
      </Box>
      <Typography
        variant={"body1"}
        fontSize="1em"
        fontWeight="600"
        mt={2}
        mb={2}
      >
        {course.title}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
        color="text.secondary"
      >
        <Stack direction="row" gap={"3px"} alignItems="center">
          <AutoStoriesOutlined fontSize="0.7em" />
          <Typography variant={"body2"} fontSize="0.7em">
            {course.videosCount} Lessons
          </Typography>
        </Stack>
        <Stack direction="row" gap={"2px"} alignItems="center">
          <AccessTimeOutlined fontSize="0.7em" />
          <Typography variant={"body2"} fontSize="0.7em">
            {course.duration.hours}h {course.duration.minutes}m
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        gap={"2px"}
        alignItems="center"
        justifyContent="space-between"
        my={1}
      >
        <Rating name="rating" value={course.rating} readOnly precision={0.1} />
        <Typography variant={"body2"} fontSize="0.7em" color="text.secondary">
          ({course.reviewersCount}) Reviews{" "}
        </Typography>
      </Stack>
      <LoadingButton
        variant="contained"
        sx={{ fontWeight: "600", borderRadius: 19 }}
        onClick={addToCart}
      >
        Add to cart
      </LoadingButton>
    </Paper>
  );
}

export default CourseCard;
