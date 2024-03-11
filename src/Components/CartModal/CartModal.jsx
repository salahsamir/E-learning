import styled from "@emotion/styled";
import {
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { allContext } from "../../Context/Context.jsx";

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
  let headers = {
    token: localStorage.getItem("token"),
  };

  // const createOrder = async () => {
  //   try {
  //     const response = await axios.post(`${BaseApi}/order`, null, { headers });
  //     console.log(response);
  //     window.location.href = response.data.result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  let { cart, cartdata, RemoveFromCart, createOrder } = useContext(allContext);

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
            alignItems: cartdata.length === 0 && "center",
            justifyContent: cartdata.length === 0 && "center",
          }}
        >
          {cartdata.length !== 0 &&
            cartdata.map((course) => (
              <CartItem course={course} key={course.id} />
            ))}
          {cartdata.length === 0 && (
            <Typography variant="h5" margin={"auto"} fontWeight={600}>
              The cart is empty!
            </Typography>
          )}
        </Stack>
        {cartdata.length !== 0 && (
          <Stack
            height="calc(150px - 32px - 32px)"
            justifyContent="center"
            alignItems={{ xs: "center", sm: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{ width: "fit-content", fontWeight: 600 }}
              onClick={createOrder}
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
