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
function TabPanel({ children, value, index, ...other }) {
  // console.log(value, index);
  let nav=useNavigate()
  let[course,setCourse]=useState([])
  const getAllCourse = async () => {
    try {
      const response = await axios.get(`${BaseApi}/course/category/${value}/subCategory/${index}`);
       setCourse(response.data.courses);
       console.log(response.data.courses);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Box sx={{ p: 3 }}>  
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

          >
            <Box onClick={() => nav("/courseparts")}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  variant="rounded"
                  src={ele.coverImageUrl}
                  sx={{
                    height: "200px",
                    width: "100%",
                    backgroundSize: "cover",
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
                <Typography variant="body2" color="text.secondary" sx={{ position: "absolute", right: "10px", top: "100%"}}>{ele.instructorName}</Typography> */}
           
              
              </Box>
              {/* <Stack direction={'row'} justifyContent={'space-between'} pt={"35px"}> */}
                <Typography variant="h6" color='primary'>{ele.title}</Typography>
               <Box display={"flex"} justifyContent={"space-between"}>

               <Typography  variant="contained">BestSeller</Typography>
                <Typography sx={{color:"yellow"}}>{ele.price}$</Typography>

               </Box>
               {/* <Rating value={ele.rating} size="small" precision={0.5}/>
                <Typography>{ele.rating}</Typography></Box>
                </Stack>  
                <Typography  py={"10px"} color="text.secondary">Chapter :15</Typography>
                <Stack direction={'row'} py={"10px"} justifyContent={'space-between'}> */}
                 
    
                {/* </Stack>       */}
              
            </Box>
            <Divider color={"yellow"}></Divider>
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
            sx={{ borderRight: 1, borderColor: 'divider', position: 'absolute', top: '30%' }}
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