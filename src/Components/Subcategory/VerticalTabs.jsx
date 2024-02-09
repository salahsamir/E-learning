import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import { BaseApi } from '../../util/BaseApi.js';
import { useNavigate } from 'react-router-dom';
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
import style from "./Vertical.module.css"
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice.jsx';
function TabPanel({ children, value, index, ...other }) {
  let nav=useNavigate()
  const dispatch = useDispatch();
  let headers={
    token:localStorage.getItem('token')
  }
  let[course,setCourse]=useState([])
  const getAllCourse = async () => {
    try {
      const response = await axios.get(`${BaseApi}/course/category/${value}/subCategory/${index}`);
       setCourse(response.data.courses);
  
    } catch (error) {
      console.log(error);
    }
  };

  ///  funct that fire Cart

//   let AddToCart = async (id) => {
//     try {
       
//         let response = await axios.patch(`${BaseApi}/cart/add/${id}`, null, { headers: headers })
//         toast.success('Successfully added to cart!', {
//             icon: '👏',
//             style: {
//                 borderRadius: '10px',
//                 background: '#1B0A26',
//                 color: '#F2C791',
//             },
//         });
        
//     } catch (error) {
//         // Display error toast
//         toast.error(error.response.data.message, {
//             style: {
//                 borderRadius: '10px',
//                 background: '#1B0A26',
//                 color: '#F2C791',
//             },
//         });
//     }
// }




  useEffect(() => {
    getAllCourse();
  }, [value,index]);


  return (
    
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value !== index && (
          <Box sx={{  }}>  
     <>
      {course?
      <Stack spacing={2} >
      <Grid container spacing={2}>
        {course.map((ele, index) => (
          <Grid
            item
            sm={6}
            xs={6}
            md={3}
            p={"20px"}
            key={index}
            data-aos="zoom-in-down"
            background={"#fff"}
            className={`${style.course}`}

          >
            <Box  py={2} onClick={() => nav(`/Chapter/${ele._id}`)}>
              <Box >
                <Avatar
                  variant="rounded"
                  src={ele.coverImageUrl}
                  sx={{
                    height: "180px",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: '30%'
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
                 <Typography variant="h6" color='primary'>{ele.title}</Typography>
                 <Typography variant="body2" color="text.secondary" >salah</Typography>
                {/* <Typography  py={"5px"} color="text.secondary">Chapter :15</Typography> */}
                <Box display={"flex"} justifyContent={"space-between"}>
                <Rating value='4.5' size="small" precision={0.5}/>
                <Typography>4.5</Typography>
                
               </Box>
                <Typography sx={{color:"yellow"}}>{ele.price}$</Typography>
              
            </Box>
              <Box className={`${style.btn}`}>

            <Divider  color={"yellow"}><Button  variant="contained" onClick={() => dispatch(cartActions.addToCart(ele._id))} >Add To Cart</Button></Divider>
              </Box>
          </Grid>

        ))}
      </Grid>
    </Stack>


:""

      }
     
     
     
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs({ id }) {
  const [value, setValue] = useState('');
  const [subcategory, setSubCategory] = useState([]);
  const [index, setIndex] = useState('');

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
  

    <Box sx={{ flexGrow: 1, display: 'flex', height: 224 }}>
      {subcategory.length > 0 && (
        <>
         <Grid container>
    <Grid item  md={2} sx={{}}>

    <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', position: 'absolute', top: '35%' }}
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
    <Grid item sm={12} md={10}>


          <TabPanel value={id} index={index} />
    </Grid>
    <Grid/>
    </Grid>
         
        </>
      )}
    </Box>

  );
}

export default VerticalTabs;