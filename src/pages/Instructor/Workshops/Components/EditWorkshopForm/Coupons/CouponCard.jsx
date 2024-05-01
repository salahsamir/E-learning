import { Box, IconButton, Typography, lighten } from "@mui/material";
import React from "react";
import Logo from "assets/images/logo.png";
import { Check, ContentCopy, DeleteForever } from "@mui/icons-material";
import { useDeleteCoupon } from "api/instructor/courses.tsx";
import useGetParams from "hooks/useGetParams";

const Notch = ({ dir = "left" }) => {
  return (
    <Box
      sx={{
        height: "24px",
        width: "24px",
        borderRadius: "50%",
        backgroundColor: (theme) => theme.palette.background.b1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%) ",
        ...(dir === "left" && {
          left: "-12px",
        }),
        ...(dir === "right" && {
          right: "-12px",
        }),
      }}
    />
  );
};

const DeleteCouponBtn = ({ couponId }) => {
  const params = useGetParams();
  const { mutate: deleteCoupon, isPending: deletingCoupon } = useDeleteCoupon();
  const handleDeleteCoupon = () => {
    deleteCoupon({ courseId: params[1], couponId: couponId });
  };
  return (
    <IconButton
      className="delete-coupon"
      onClick={handleDeleteCoupon}
      disabled={deletingCoupon}
      sx={{
        display: "none",
        position: "absolute",
        top: "4px",
        right: "4px",
        padding: "4px",
        height: "30px",
        width: "30px",
      }}
    >
      <DeleteForever color="error" fontSize="small" />
    </IconButton>
  );
};

const CopyToClipboardBtn = ({ name }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <IconButton
      onClick={() => {
        if (copied) return;
        navigator.clipboard.writeText(name);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
    >
      {copied ? (
        <Check
          sx={{
            height: "16px",
            width: "16px",
            color: "success.main",
          }}
        />
      ) : (
        <ContentCopy
          sx={{
            height: "16px",
            width: "16px",
          }}
        />
      )}
    </IconButton>
  );
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const CouponCard = ({ couponId, discount, expireAt, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        px: "32px",
        py: "4px",
        borderRadius: "8px",
        position: "relative",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "grey.200"
            : lighten(theme.palette.background.b1, 0.08),
        "&:hover .delete-coupon": {
          display: "flex",
        },
      }}
      overflow="hidden"
    >
      <Notch />
      <Notch dir="right" />
      <DeleteCouponBtn couponId={couponId} />
      <Box
        sx={{
          display: "flex",
          padding: "16px",
          pl: "0px",
          alignItems: "center",
          borderRight: "1px dashed",
          borderColor: (theme) =>
            theme.palette.mode === "light"
              ? "grey.300"
              : lighten(theme.palette.background.b1, 0.16),
        }}
      >
        <img
          src={Logo}
          alt="website logo"
          style={{
            height: "40px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "16px",
          }}
        >
          <Typography color="text.secondary" variant="body2">
            Eduvation
          </Typography>
          <Typography variant="h6" fontWeight="600">
            {discount}% off
          </Typography>
          <Typography color="text.secondary" variant="caption">
            valid till {formatDate(expireAt)}
          </Typography>
        </Box>
        <Box
          display="flex"
          gap="16px"
          alignItems="center"
          padding="4px 8px"
          margin="16px"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "grey.300"
                : lighten(theme.palette.background.b1, 0.12),
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="body1"
            fontWeight="500"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "black" : "text.primary",
            }}
          >
            {name}
          </Typography>
          <CopyToClipboardBtn name={name} />
        </Box>
      </Box>
    </Box>
  );
};

export default CouponCard;
