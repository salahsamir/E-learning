import React, { useEffect, useState } from 'react';
import Opetions from './Opations';
import axios from 'axios';
import { BaseApi } from 'util/BaseApi';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Cources() {
  const [cources, setCources] = useState([]);
   let nav=useNavigate()
  useEffect(() => {
    async function getAllCources() {
      try {
        const response = await axios.get(`${BaseApi}/course/all-courses`);
        setCources(response.data.courses);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCources();
  }, []);
  
  const handleOptionSelect = async (selectedOption) => {
    let response =await axios.get(`${BaseApi}/course/category/${selectedOption._id}/subCategory/`).catch((err)=>console.log(err))
    setCources(response.data.courses)
     
   
  };
  let GetReverceCources=async()=>{
   // Create a copy of the current state array before reversing it
  const reversedCources = [...cources].reverse();
  // Update the state with the reversed array
  setCources(reversedCources);
   }
  return (
    <>
      {cources.length > 0 ? (
        <div className='container'>
          <div className='flex justify-between'>
            <Opetions onOptionSelect={handleOptionSelect} />
            <Button onClick={() => {GetReverceCources()}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
</Button>
          </div>
          <div className=''>
            <div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
              <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {cources.map((ele) => (
                  <div key={ele.id} className='group relative' onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                      <img src={ele.coverImageUrl} alt={ele.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <Typography color='primary'>{ele.title}</Typography>
                        </h3>
                      </div>
                      <p className='text-sm font-medium text-gray-200'>{ele.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <span class='loader'></span>
        </div>
      )}
    </>
  );
}
