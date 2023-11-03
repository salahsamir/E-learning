import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartWrapper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "300px",
  [theme.breakpoints.up("sm")]: { width: "500px" },
  [theme.breakpoints.up("md")]: { width: "700px" },
  height: "80vh",
  borderRadius: "10px",
  padding: "16px",
  backgroundColor: theme.palette.background.default,
}));
function CartModal(props) {
  const dispatch = useDispatch();
  // const dummyCart = [
  //   {
  //     title: "React complete Course",
  //     image:
  //       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Web Development",
  //     price: 40,
  //     rating: 4.5,
  //     instructorName: "Salah Eddine",
  //     instructorImg: "https://avatars.githubusercontent.com/u/47204354?v=4",
  //     instructorJob: "Web Developer",
  //     id: 1,
  //     rating: 4.7,
  //     reviewersCount: 20,
  //     videosCount: 120,
  //     duration: { hours: 20, minutes: 30 },
  //   },
  // ];
  const dummyCart = useSelector((state) => state.cart.cartItems);
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <CartWrapper elevation={0}>
        <Typography variant="h5" mb={"16px"} fontWeight={600}>
          Shopping Cart:{" "}
        </Typography>
        <Divider />
        <Stack
          spacing={2}
          pt={2}
          height="calc(80vh - 150px )"
          sx={{
            overflowY: "auto",
            alignItems: dummyCart.length === 0 && "center",
            justifyContent: dummyCart.length === 0 && "center",
          }}
        >
          {dummyCart.length !== 0 &&
            dummyCart.map((course) => (
              <CartItem course={course} key={course.id} />
            ))}
          {dummyCart.length === 0 && (
            <Typography variant="h5" margin={"auto"} fontWeight={600}>
              The cart is empty!
            </Typography>
          )}
        </Stack>
        {dummyCart.length !== 0 && (
          <Stack
            height="calc(150px - 32px - 32px)"
            justifyContent="center"
            alignItems={{ xs: "center", sm: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{ width: "fit-content", fontWeight: 600 }}
            >
              Checkout
            </Button>
          </Stack>
        )}
      </CartWrapper>
    </Modal>
  );
}

export default CartModal;
