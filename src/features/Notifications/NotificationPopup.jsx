import { Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "assets/images/logo.png";
import { LoadingButton } from "@mui/lab";

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        `/service-workers/notfications.js?notificationAllowed=${
          Notification.permission === "granted"
        }&token=${localStorage.getItem("token")}`
      );
      return registration;
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const handleDenyNotifications = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  document.cookie = `notificationPermission=denied; expires=${date.toUTCString()}`;
};

const handleAllowNotifications = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      document.cookie = `notificationPermission=granted; expires=Thu, 18 Dec 2027 12:00:00 UTC`;
    } else {
      handleDenyNotifications();
    }
  });
};

const NotificationPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check_permision = () => {
      if (
        localStorage.getItem("token") &&
        !document.cookie.includes("notificationPermission")
      ) {
        setOpen(true);
      }
    };
    window.addEventListener("load", () => {
      check_permision();
      registerServiceWorker();
    });
    return () => {
      window.removeEventListener("load", () => {
        check_permision();
        registerServiceWorker();
      });
    };
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        elevation: 2,
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "16px",
          maxWidth: "350px",
          borderRadius: "12px",
        },
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "50px",
        }}
      />
      <Typography variant="h6" mb="16px" mt="8px">
        Stay Updated
      </Typography>
      <Typography variant="subtitle2" textAlign="center" mb="30px">
        Stay updated with your progress in courses, new messages, your schedule,
        and more.
      </Typography>
      <LoadingButton
        variant="contained"
        fullWidth
        onClick={() => {
          handleAllowNotifications();
          setOpen(false);
        }}
      >
        Allow Notifications
      </LoadingButton>
      <LoadingButton
        variant="text"
        onClick={() => {
          setOpen(false);
          handleDenyNotifications();
        }}
        sx={{
          mt: "8px",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.dark",
          },
        }}
      >
        Not Now
      </LoadingButton>
    </Dialog>
  );
};

export default NotificationPopup;
