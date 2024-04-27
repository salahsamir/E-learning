import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CouponCard from "./CouponCard";

const CouponsList = ({ coupons }) => {
  return (
    <Grid2 container spacing={2}>
      {coupons.map((coupon) => (
        <Grid2 key={coupon.name} xs={12} md={6}>
          <CouponCard
            expireAt={coupon.expireAt}
            name={coupon.name}
            discount={coupon.discount}
            couponId={coupon._id}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CouponsList;
