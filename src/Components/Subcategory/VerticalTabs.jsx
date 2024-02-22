import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { BaseApi } from "../../util/BaseApi.js";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PageviewIcon from '@mui/icons-material/Pageview';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import style from "./Vertical.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice.jsx";
import { Favorite, FavoriteBorder, ModeFanOff } from "@mui/icons-material";
import { addToWishlist } from "../../store/wishlistSlice.jsx";
import { allContext } from "../../Context/Context.jsx";

function TabPanel({ children, value, index, ...other }) {
  let nav = useNavigate();
  const dispatch = useDispatch();
  let wishlist = useContext(allContext);
  let headers = {
    token: localStorage.getItem("token"),
  };
  let [course, setCourse] = useState([]);
  const getAllCourse = async () => {
    try {
      const response = await axios.get(
        `${BaseApi}/course/category/${value}/subCategory/${index}`
      );
      setCourse(response.data.courses);
    } catch (error) {
      console.log(error);
    }
  };
  let GoToCourse = (id) => {
    nav(`/courseDetails/${id}`);
   
  }

  // let AddToWishlist = async (id) => {
  //   let res = await wishlist.AddToWishlist(id);
  //   if (res?.message == "Done") {
  //     wishlist.setWishlist(wishlist.wishlist + 1);
  //     toast.success(res.message);
  //   }
  // };
  useEffect(() => {
    getAllCourse();
  }, [value, index]);

  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value !== index && (
        <Box sx={{}}>
          <>
            {course ? (
              <Stack>
                <Grid p={1}>
                  {course.map((ele, index) => (
                    <Grid
                      item
                      sm={3}
                      xs={6}
                      md={3}
                      p={"5px"}
                     
                      key={index}
                      data-aos="zoom-in-down"
                      background={"#fff"}
                      className={`${style.course}`}
                      
                    >
                   
                      <Box
                        position={"relative"}
                        
                      >
                        <Box>
                          <Avatar
                            variant="rounded"
                            src={ele.coverImageUrl}
                            sx={{
                              height: "180px",
                              width: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              // borderTopLeftRadius: "20%",
                            }}
                          />
                          {/* <Avatar
                  src={ele.instructorImg}
                  sx={{
                    backgroundSize: "cover",
                    height: "25%",
                    width: "20%",
                    position: "absolute", left: "10px", top: "90%"
                  }}
                />
               */}
                        </Box>
                        <Typography variant="h6" color="primary">
                          {ele.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          salah
                        </Typography>
                     
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Rating value="4.5" size="small" precision={0.5} />
                          <Typography>4.5</Typography>
                        </Box>
                        <Typography sx={{ color: "yellow" }}>
                          {ele.price}$
                        </Typography>
                      </Box>
                  
                      <Box className={`${style.layer}`}
                        position={"absolute"}
                        top={0}
                        left={0}
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                      
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        
                        sx={{ background: "rgba(10, 10, 10,0.6)" }}
                      >
                        <Box

                          
                        className={`${style.icon}`}  onClick={() => {
                          wishlist.AddToWishlist(ele._id)
                          }}
                        >
                          <Favorite color="primary"  sx={{fontSize:"40px"}} />
                        </Box>
                        <Box
                         
                        className={`${style.icon}`}  onClick={() => GoToCourse(ele._id)}
                        >
                          <PageviewIcon  color="primary"  sx={{fontSize:"40px"}} />
                        </Box>
                        <Box className={`${style.icon}`}  onClick={() =>
                                dispatch(cartActions.addToCart(ele._id))
                              }>
                          <AddShoppingCartIcon color="primary" sx={{fontSize:"40px"}}/>
                         
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            ) : (
              ""
            )}
          </>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs({ id }) {
  const [value, setValue] = useState("");
  const [subcategory, setSubCategory] = useState([]);
  const [index, setIndex] = useState("");

  const getAllSubCategory = async () => {
    try {
      const response = await axios.get(`${BaseApi}/category/${id}/subCategory`);
      setSubCategory(response.data.subCategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSubCategory();
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeIndex = (id) => {
    setIndex(id);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", height: 224 }}>
      {subcategory.length > 0 && (
        <>
          <Grid container>
            <Grid item sm={2} md={2} sx={{}}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  position: "absolute",
                  top: "35%",
                }}
              >
                {subcategory?.map((item, index) => (
                  <Tab
                    key={item._id}
                    label={item.name}
                    {...a11yProps(index)}
                    onClick={() => {
                      changeIndex(item._id);
                    }}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item sm={10} md={10}>
              <TabPanel value={id} index={index} />
            </Grid>
            <Grid />
          </Grid>
        </>
      )}
    </Box>
  );
}

export default VerticalTabs;
