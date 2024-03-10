<<<<<<< HEAD
import { Button, Stack, Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { BaseApi } from "../../util/BaseApi.js";
function TopBar({ display }) {
  let [category, setCategory] = useState([]);
  let getAllCategory = async () => {
    let response = await axios.get(`${BaseApi}/category`).catch((err) => {
      console.log(err);
    });
    setCategory(response.data.category);
    // console.log(category);
  };
  useEffect(() => {
    getAllCategory();
  }, []);
=======
import React, { useContext } from "react";
import Link from '@mui/material/Link';
import { Stack, Breadcrumbs } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { allContext } from "../../Context/Context.jsx";

function TopBar({ display }) {
  const { category } = useContext(allContext);
>>>>>>> salah

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
<<<<<<< HEAD
        {category ? (
          <>
            <Breadcrumbs aria-label="breadcrumb" separator={""} maxItems={10}>
              {category.map((item) => {
                return (
                  <Link
                    underline="none"
                    color="inherit"
                    component={RouterLink}
                    to={`/course/${item._id}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Breadcrumbs>
          </>
        ) : (
          " "
        )}
=======
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
>>>>>>> salah
      </Stack>
    </Stack>
  );
}
export default TopBar;