import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TopBar({ display }) {
  return (
    <>
      <Stack
        justifyContent="center"
        direction="row"
        height="40px"
        width="100%"
        position={"fixed"}
        zIndex={100}
        display={display}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          borderBottom: "1px solid #bcbcce22",
        }}
      >
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Business
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Technology
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Education
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Arts
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Marketing
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Design
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Science
        </Button>
        <Button
          color="inherit"
          sx={{ height: "100%" }}
          LinkComponent={Link}
          href="/"
        >
          Lifestyle
        </Button>
      </Stack>
    </>
  );
}

export default TopBar;
