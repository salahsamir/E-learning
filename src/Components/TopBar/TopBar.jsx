import React, { useContext } from "react";
import Link from "@mui/material/Link";
import { Stack, Breadcrumbs } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { allContext } from "../../Context/Context.jsx";

function TopBar({ display }) {
  const { category } = useContext(allContext);

  return (
    <Stack>
      <Stack
        justifyContent="center"
        direction="row"
        alignItems="center"
        height="35px"
        width="100%"
        position="fixed"
        zIndex={100}
        display={display}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=""
          maxItems={10}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size based on screen size
          }}
        >
          {category &&
            category.map((item) => (
              <Link
                key={item._id}
                underline="none"
                color="inherit"
                component={RouterLink}
                to={`/course/${item._id}`}
              >
                {item.name}
              </Link>
            ))}
        </Breadcrumbs>
      </Stack>
    </Stack>
  );
}

export default TopBar;
