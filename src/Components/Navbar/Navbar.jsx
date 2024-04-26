import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import ActionsRight from "./ActionsRight/ActionsRight";
import Link from "@mui/material/Link";
import Category from "./Category.jsx";
import { SearchOutlined } from "@mui/icons-material";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState(""); 
  // State to store search query
   let nav=useNavigate()
  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
     
      nav(`/search/${searchQuery}`)
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "45px",
        paddingX: ".8em",
        borderBottom: ".5px solid #bcbcce44",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box display='flex'>
        <Typography variant="h3" mx={1}  fontSize={{ xs: "1.7em", sm: "2em" }}>
          <Link
            to={"/"}
            component={RouterLink}
            color={'primary.main'}
            sx={{
              textDecoration: "none",
            //   color: (theme) =>
            //     theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            Eduvation
          </Link>
        </Typography>

      <Category/>
      </Box>
      
      <Box  display={{ xs: "none", md: "block" }}>
      <Paper
     
     component="form"
     onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }} // Handle form submit
     sx={{ alignItems: 'center',borderRadius: '20px' }}
   >
   
     <InputBase
       sx={{ px:2 }}
       placeholder="Search...."
       inputProps={{ 'aria-label': 'search google maps', value: searchQuery, onChange: handleInputChange }}
     />
 
     <IconButton type="submit" aria-label="search">
       <SearchOutlined />
     </IconButton>
   </Paper>
      </Box>
      <ActionsRight cartVisible={true} />
    </AppBar>
  );
}
