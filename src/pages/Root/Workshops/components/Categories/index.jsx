import { Box, Skeleton } from "@mui/material";
import { useGetCategories } from "api/global/categories.tsx";
import Category from "./Category";

const Categories = () => {
  const {
    data: categories,
    isLoading: loadingCategores,
    error: categoriesError,
  } = useGetCategories();
  return (
    <Box
      sx={{
        display: "flex",
        padding: "16px 16px 16px",
        gap: "8px",
        minWidth: "100%",
        overflowX: "auto",
        borderBottom: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      {loadingCategores &&
        [1, 2, 3, 4, 5, 6, 7].map((ele) => (
          <Skeleton
            key={ele}
            sx={{
              transform: "none",
              minHeight: "40px",
              minWidth: 120 - Math.floor(Math.random() * 40) + "px",
            }}
          />
        ))}
      {!loadingCategores &&
        !categoriesError &&
        [{ name: "All Categories", _id: "all" }, ...categories].map(
          (category) => <Category key={category._id} category={category} />
        )}
    </Box>
  );
};

export default Categories;
