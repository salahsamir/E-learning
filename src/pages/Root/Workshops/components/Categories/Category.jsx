import { Button, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Category = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategoryId = searchParams.get("category");
  let isActive = currentCategoryId === category._id;
  if (category._id === "all" && !currentCategoryId) isActive = true;

  return (
    <Button
      onClick={() => {
        setSearchParams((old) => {
          old.set("category", category._id);
          return old;
        });
      }}
      sx={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid",
        borderColor: (theme) => theme.palette.divider,
        backgroundColor: isActive ? "primary.main" : "transparent",
        minWidth: "max-content",
        "&:hover": {
          backgroundColor: isActive ? "primary.main" : "action.hover",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        variant="body2"
        color={isActive ? "white" : "text.primary"}
        whiteSpace="nowrap"
      >
        {category.name}
      </Typography>
    </Button>
  );
};

export default Category;
