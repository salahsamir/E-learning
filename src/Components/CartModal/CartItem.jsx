import styled from "@emotion/styled";
import { Remove } from "@mui/icons-material";
import { Button, Rating, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";

import { useDispatch } from "react-redux";
import { allContext } from "../../Context/Context.jsx";

const Image = styled("img")(({ theme }) => ({
  width: "150px",
  height: "100px",
  borderRadius: 5,
}));
function CartItem(props) {
  let {RemoveFromCart}=useContext(allContext)

  const { courseId, name, image, category, price, rating, instructorName } =
    props.course;
  return (
    <Stack
      direction={{ sm: "row" }}
      flexWrap="wrap"
      alignItems={{
        xs: "center",
        sm: "flex-start",
      }}
      justifyContent={{
        xs: "flex-start",
        sm: "space-between",
      }}
      spacing={1}
      sx={{
        backgroundColor: (theme) => theme.palette.background.b1,
        p: "16px",
        borderRadius: "15px",
      }}
    >
      <Stack
        gap={1}
        direction={{ sm: "row" }}
        alignItems={{ xs: "center", sm: "flex-start" }}
      >
        <Image src={image} alt={name} />
        <Stack alignItems={{ xs: "center", sm: "flex-start" }}>
          <Typography
            variant={"body2"}
            fontSize="1em"
            fontWeight="600"
            maxwidth={250}
          >
            {name}
          </Typography>
          <Typography
            variant={"body2"}
            fontSize="0.7em"
            fontWeight="600"
            color="text.secondary"
          >
            by {instructorName}
          </Typography>
          <Rating
            name="rating"
            value={rating}
            readOnly
            precision={0.1}
            size="small"
          />
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Typography variant={"h5"} fontWeight="600" pt={1} pb={3}>
          {price}
        </Typography>
        <Button
          variant="text"
          color="error"
          size="small"
          sx={{ fontWeight: 600 }}
          onClick={() => RemoveFromCart(courseId)}
        >
          Remove
        </Button>
      </Stack>
    </Stack>
  );
}

export default CartItem;
