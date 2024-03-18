import styled from "@emotion/styled";
import { Button, Rating, Stack, Typography ,Avatar} from "@mui/material";
import React, { useContext } from "react";
import { allContext } from "../../Context/Context.jsx";

const Image = styled("img")(({ theme }) => ({
  width: "150px",
  height: "100px",
  borderRadius: 5,
}));
function CartItem(props) {
  let { RemoveFromCart } = useContext(allContext);

  const {
    courseId,
    name,
    coverImageUrl,
    createdBy,
    price,
    rating,
    instructorName,
  } = props.course;
  // console.log(courseId, name,coverImageUrl, category, price, rating, instructorName);
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
        <Avatar width={'200px'} variant="rounded"  src={coverImageUrl} alt={name} />
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
            by {createdBy.userName}
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Typography variant={"h5"} fontWeight="600" pt={1} pb={1}>
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
