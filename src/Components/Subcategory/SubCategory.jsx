import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BaseApi } from '../../util/BaseApi.js';
import { Breadcrumbs, Button, Stack, Typography } from '@mui/material';
import SubcategoryDetails from './SubcategoryDetails.jsx';

export default function SubCategory({ id }) {
  const [subcategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const getAllSubCategory = async () => {
    try {
      const response = await axios.get(`${BaseApi}/category/${id}/subCategory`);
      setSubCategory(response.data.subCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubCategoryClick = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
  };

  useEffect(() => {
    getAllSubCategory();
  }, [id]);

  return (
    <Stack spacing={2} >
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Breadcrumbs separator=" " aria-label="breadcrumb">
        {subcategory.map((ele, index) => (
          <Button key={index} onClick={() => handleSubCategoryClick(ele._id)}>
            <Typography fontSize={'16px'} color={"primary"}>
              {ele.name}
            </Typography>
          </Button>
        ))}
      </Breadcrumbs>
    </div>
    {selectedSubCategory ? (
      <SubcategoryDetails id={id} subCategory={selectedSubCategory} />
    ) : (
      <SubcategoryDetails id={id} />
    )}
  </Stack>
  
  );
}
