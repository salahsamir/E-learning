import { Box, Divider, Typography } from "@mui/material";
import React, { Fragment } from "react";
import NotificationItem from "./NotificationItem";
import { useGetNotifications } from "api/global/notifications.tsx";
import NotificationSkeleton from "./NotificationSkeleton";

const NotificationsList = () => {
  const {
    data: notifications,
    isLoading: loadingNotifications,
    isError,
  } = useGetNotifications();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "350px",
        overflowY: "auto",
      }}
    >
      {/* ************* case when notifications are loaded ************* */}
      {notifications?.map((notification, index) => (
        <Fragment key={notification._id}>
          {index !== 0 && (
            <Divider
              sx={{
                backgroundColor: (theme) => theme.palette.divider,
              }}
            />
          )}
          <NotificationItem {...notification} />
        </Fragment>
      ))}
      {/* ************* case when loading notifications ************* */}
      {loadingNotifications &&
        [...Array(3)].map((_, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.divider,
                }}
              />
            )}
            <NotificationSkeleton />
          </Fragment>
        ))}
      {/* ************* case when there was an error ************* */}
      {!loadingNotifications && (isError || notifications?.lenght === 0) && (
        <Box
          sx={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isError && (
            <Typography
              variant="body2"
              fontWeight="500"
              color="error"
              textAlign="center"
            >
              There was an error fetching notifications. <br />
              Please try again later.
            </Typography>
          )}
          {/* ************* case when there are no notifications ************* */}
          {!isError && notifications?.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              No notifications to show.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default NotificationsList;
