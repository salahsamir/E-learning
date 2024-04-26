// import React, { useContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import axios from "axios";
// import { BaseApi } from "../../util/BaseApi.js";
// import { useNavigate } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import PageviewIcon from "@mui/icons-material/Pageview";
// import { Avatar, Box, Grid, Rating, Stack, Typography } from "@mui/material";
// import style from "./Vertical.module.css";
// import { Favorite } from "@mui/icons-material";
// import { allContext } from "../../Context/Context.jsx";

// function TabPanel({ children, value, index, ...other }) {
//   let nav = useNavigate();
//   let { AddToWishlist, AddToCart } = useContext(allContext);

//   let [course, setCourse] = useState([]);
//   const getAllCourse = async () => {
//     try {
//       const response = await axios.get(
//         `${BaseApi}/course/category/${value}/subCategory/${index}`
//       );

//       setCourse(response.data.courses);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   let GoToCourse = (id) => {
//     nav(`/courseDetails/${id}`);
//   };

//   useEffect(() => {
//     getAllCourse();
//   }, [value, index]);

//   return (
//     <div
//       role="tabpanel"
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value !== index && (
//         <Box sx={{}}>
//           <>
//             {course ? (
//               <Stack>
//                 <div className="row">
//                   {course.map((ele, index) => (
//                     <div
//                       p={"5px"}
//                       key={index}
//                       data-aos="zoom-in-down"
//                       background={"#fff"}
//                       className={` col-md-4 ${style.course}`}
//                     >
//                       <Box position={"relative"}>
//                         <Box>
//                           <Avatar
//                             variant="rounded"
//                             src={ele.coverImageUrl}
//                             sx={{
//                               height: "180px",
//                               width: "100%",
//                               backgroundSize: "cover",
//                               backgroundPosition: "center",
//                             }}
//                           />
//                         </Box>
//                         <Typography variant="h6" color="primary">
//                           {ele.title}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           salah
//                         </Typography>

//                         <Box display={"flex"} justifyContent={"space-between"}>
//                           <Rating value="4.5" size="small" precision={0.5} />
//                           <Typography>4.5</Typography>
//                         </Box>
//                         <Typography sx={{ color: "yellow" }}>
//                           {ele.price}$
//                         </Typography>
//                       </Box>

//                       <Box
//                         className={`${style.layer}`}
//                         position={"absolute"}
//                         top={0}
//                         left={0}
//                         width={"100%"}
//                         height={"100%"}
//                         display={"flex"}
//                         justifyContent={"space-around"}
//                         alignItems={"center"}
//                         sx={{ background: "rgba(10, 10, 10,0.6)" }}
//                       >
//                         <Box
//                           className={`${style.icon}`}
//                           onClick={() => {
//                             AddToWishlist(ele._id);
//                           }}
//                         >
//                           <Favorite color="primary" sx={{ fontSize: "40px" }} />
//                         </Box>
//                         <Box
//                           className={`${style.icon}`}
//                           onClick={() => GoToCourse(ele._id)}
//                         >
//                           <PageviewIcon
//                             color="primary"
//                             sx={{ fontSize: "40px" }}
//                           />
//                         </Box>
//                         <Box
//                           className={`${style.icon}`}
//                           onClick={() => AddToCart(ele._id)}
//                         >
//                           <AddShoppingCartIcon
//                             color="primary"
//                             sx={{ fontSize: "40px" }}
//                           />
//                         </Box>
//                       </Box>
//                     </div>
//                   ))}
//                 </div>
//               </Stack>
//             ) : (
//               ""
//             )}
//           </>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// function VerticalTabs({ id }) {
//   const [value, setValue] = useState("");
//   const [subcategory, setSubCategory] = useState([]);
//   const [index, setIndex] = useState("");

//   const getAllSubCategory = async () => {
//     try {
//       const response = await axios.get(`${BaseApi}/category/${id}/subCategory`);
//       setSubCategory(response.data.subCategory);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllSubCategory();
//   }, [id]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const changeIndex = (id) => {
//     setIndex(id);
//   };

//   return (
//     <Box sx={{ flexGrow: 1, display: "flex", height: 224 }}>
//       {subcategory.length > 0 && (
//         <>
//           <Grid container>
//             <Grid item xs={12} sm={3} md={2}>
//               <Tabs
//                 orientation="vertical"
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="Vertical tabs example"
//                 sx={{
//                   borderRight: 1,
//                   borderColor: "divider",
//                   position: "absolute",
//                   top: "35%",
//                 }}
//               >
//                 {subcategory?.map((item, index) => (
//                   <Tab
//                     key={item._id}
//                     label={item.name}
//                     {...a11yProps(index)}
//                     onClick={() => {
//                       changeIndex(item._id);
//                     }}
//                   />
//                 ))}
//               </Tabs>
//             </Grid>
//             <Grid item xs={12} sm={9} md={10}>
//               <TabPanel value={id} index={index} />
//             </Grid>
//             <Grid />
//           </Grid>
//         </>
//       )}
//     </Box>
//   );
// }

// export default VerticalTabs;
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BaseApi } from '../../util/BaseApi.js';
import { Avatar, Button, Container, Rating, Stack, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { allContext } from "../../Context/Context.jsx";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery'; 
export default function SubcategoryDetails({id,subCategory}) {
  let { AddToWishlist, AddToCart } = useContext(allContext);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  let nav=useNavigate()
  let [course, setCourse] = useState([]);
  if(subCategory===undefined){
    subCategory=''
  }
  const getAllCourse = async () => {
    try {
      const response = await axios.get(
        `${BaseApi}/course/category/${id}/subCategory/${subCategory}`
      );

      setCourse(response.data.courses);
      
    } catch (error) {
      console.log(error);
    }
  };
   
  let GoToCourse = (id) => {
    nav(`/courseDetails/${id}`);
  };
 
  useEffect(() => {
    getAllCourse();
  },[id,subCategory])
  return (
   <>
 <Stack spacing={2} my={2}>
 
 {course.length?
 <div className="row g-3">
 {course?.map((ele, index) => (
<Tooltip title={
<div width={'500px'} sx={{ display: isSmallScreen ? 'none' : 'block' }} >
<Typography variant='h5' color="primary" my={2}>{ele.title}</Typography>
<Typography variant='h6' fontSize={'16px'} my={1}> level: {ele.level}</Typography>
{ele.tags.map((tag, index) => (
<Typography key={index}  my={1} fontSize={'16px'}><CheckIcon color='primary'/>  {tag} </Typography>

))}
<div className='d-flex' >
<Button variant='contained' onClick={() => AddToCart(ele._id)}  sx={{ width: '50%', mx: 2 }}>Buy Now</Button>
<Button variant='outlined' onClick={() => AddToWishlist(ele._id)}><FavoriteIcon /></Button>
</div>
</div>
} placement="right-start">
<div className="col-md-3  col-sm-4 g-3" onClick={() => GoToCourse(ele._id)}  key={index}>
<Avatar src={ele.coverImageUrl} variant="rounded" sx={{ height: "200px", width: "100%" }} />
<Typography color="primary" fontSize={'16px'}>{ele.title}</Typography>
<Typography fontSize={'16px'}>
  {ele.rating}
  <span style={{ paddingLeft: '5px', paddingTop: '5px' }}>
    <Rating value={ele.rating} size="small" precision={0.5} />
  </span>
  ( {ele.numberOfRatings} )
</Typography>
<Typography fontSize={'16px'}>Price: {ele.price}$</Typography>
</div>
</Tooltip>
  
 ))}
</div>
:
<div width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
<span class="loader"></span>

</div>
}
   
 </Stack>
   
   
   </>
  )
}
