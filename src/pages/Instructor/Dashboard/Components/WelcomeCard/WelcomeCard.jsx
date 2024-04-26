import { Box, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { ReactComponent as WelcomeImg } from "../../../../../assets/svg/welcome.svg";

function WelcomeCard() {
  return (
    <Grid2 container sx={{ backgroundColor: "#81d4b6", borderRadius: 2 }}>
      <Grid2 xs={12} md={6}>
        <Stack padding="40px" width="100%" height="100%">
          <Box mb="1em" color="black">
            <Typography variant="h5" component={"h2"} fontWeight="600">
              Welcome back 👋
            </Typography>
            <Typography variant="h5" component={"h2"} fontWeight="600">
              John Doe
            </Typography>
          </Box>

          <Typography
            variant="h6"
            component="p"
            fontSize="1.2em"
            color={"#012b17"}
          >
            Here's what's happening with your courses today
          </Typography>
        </Stack>
      </Grid2>
      <Grid2
        xs={12}
        md={6}
        justifyContent={"center"}
        alignItems="center"
        display="flex"
        borderRadius="8px"
        sx={{
          "& .slick-slider": {
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <WelcomeImg style={{ maxWidth: "300px", maxHeight: "300px" }} />
      </Grid2>
    </Grid2>
  );
}

export default WelcomeCard;
