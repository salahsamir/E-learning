import React, { useContext, useEffect } from "react";
import { Stack, Breadcrumbs, Link as MuiLink, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { allContext } from "../../Context/Context.jsx";

function TopBar({ display }) {
  const { category, getAllCategory} = useContext(allContext);
  const theme = useTheme();
   useEffect(() => {
     getAllCategory();
   },[])

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
        // display={display}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=""
          maxItems={10}
          sx={{
            fontSize: {
              xxs: theme.typography.fontSize * 0.5, 
              xs: theme.typography.fontSize * 0.7, 
              sm: theme.typography.fontSize * 1, 
            },
          }}
        >
          {category &&
            category.map((item) => (
              <MuiLink
                key={item._id}
                underline="none"
                color="inherit"
                component={RouterLink}
                to={`/course/${item._id}`}
              >
                {item.name}
              </MuiLink>
            ))}
        </Breadcrumbs>
      </Stack>
    </Stack>
  );
}

export default TopBar;
