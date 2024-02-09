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
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import axios, { Axios } from "axios";
import { BaseApi } from "../../util/BaseApi.js";

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
  let[cart,setCart]=useState([])
  let headers={
    token:localStorage.getItem('token')
  }
  const getAllCart = async () => {
    try {
      const response = await axios.get(`${BaseApi}/cart`,{headers});
      setCart(response.data.cart.course);
    
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder=async()=>{
    try{
      const response=await axios.post(`${BaseApi}/order`,null,{headers})
     window.location.href=response.data.result
    }catch(error){
      console.log(error)
  }}
 const itemsCount = useSelector((state) => state.cart.itemsCount);
  useEffect(() => {
    getAllCart();
  }, [itemsCount]);
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
            alignItems: cart.length === 0 && "center",
            justifyContent: cart.length === 0 && "center",
          }}
        >

        
          {cart.length !== 0 &&
            cart.map((course) => (
              <CartItem course={course} key={course.id} />
            ))}
          {cart.length === 0 && (
            <Typography variant="h5" margin={"auto"} fontWeight={600}>
              The cart is empty!
            </Typography>
          )}
        </Stack>
        {cart.length !== 0 && (
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
