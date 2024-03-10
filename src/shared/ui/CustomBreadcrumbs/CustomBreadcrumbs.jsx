import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link } from "@mui/material";
import React from "react";

const CustomBreadcrumbs = ({ list, ...other }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      {...other}
    >
      {list.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          color={index === list.length - 1 ? "primary.main" : "text.secondary"}
          fontSize="14px"
          sx={{
            ":hover": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          {item.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
