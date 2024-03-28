import { LoadingButton } from "@mui/lab";
import React from "react";
import toast from "react-hot-toast";

const RedeemButton = ({ points }) => {
  return (
    <LoadingButton
      variant="outlined"
      onClick={() => {
        if (+points < 200) {
          toast.error("Minimum amount to redeem is 1000 points");
          return;
        }
      }}
    >
      Redeem
    </LoadingButton>
  );
};

export default RedeemButton;
