import React, { useContext, useEffect, useState } from 'react';
import Opetions from './Opations';
import axios from 'axios';
import { BaseApi } from 'util/BaseApi';
import { Button, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { allContext } from 'Context/Context';

export default function Cources({id}) {
  const [cources, setCources] = useState([]);
  const {category,getAllCategory}=useContext(allContext)
  useEffect(() => {
    getAllCategory()
  },[])
   let nav=useNavigate()
  useEffect(() => {
    async function getAllCources(id) {
      try {
        const response = await axios.get(`${BaseApi}/course/category/${id}/subCategory`);
        setCources(response.data.courses);
       
      } catch (error) {
        console.log(error);
      }
    }
    getAllCources(id);
  }, [id]);
  
  const handleOptionSelect = async (selectedOption,id) => {

    let response=await axios.get(`${BaseApi}/course/category/${id}/subCategory/${selectedOption}`).catch((err)=>{
      console.log(err)
    })
    setCources(response.data.courses)
    
     
   
  };
  let GetReverceCources=async()=>{
   // Create a copy of the current state array before reversing it
  const reversedCources = [...cources].reverse();
  // Update the state with the reversed array
  setCources(reversedCources);
   }
  return (
    <div className="container">
     
     <div className="header">
    <div className="img relative">
    <img class="h-80 w-full rounded-lg" src="https://cdn.pixabay.com/photo/2015/07/17/22/42/library-849797_640.jpg" alt="image description"/>
    <div className=" absolute h-full w-full top-0 bg-gray-900 bg-opacity-60 flex justify-center items-center">
   <div className="w-3/4">
   <h2 className=" text-4xl text-gray-200 ">You Can Learn Anything</h2>
      <p className=" text-1xl text-gray-300 ">"A comprehensive list of available courses covering various subjects, topics, and skill levels. Users can browse through the catalog to find courses that match their interests and learning goals."</p>
   </div>
      
      </div> 
    </div>     
    

     </div>

  <div className="flex my-3 w-full m-auto">
    
  {category.map((item)=>{
         return (
           <div className=" w-100 text-center " >
            <p className='pr-2  hover:text-green-700'  style={{fontSize:'calc(.6rem + .4vw)',whiteSpace: 'nowrap',cursor:'pointer'}}>{item.name}</p>
           </div>
         )
       })}
  </div>

    
      {cources.length > 0 ? (
        <div className='my-3'>
            <div className='mx-auto max-w-2xl p py-3  sm:py-16 lg:max-w-7xl'>
              <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {cources.map((ele) => (
                  <div key={ele.id} className='group relative shadow-lg' onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
                    <div className='mt-2   '>
                     <div className='relative'>
                     <img src='https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_640.jpg' alt={ele.title} className='h-40 w-full object-cover object-center rounded-lg' />
                     <div className='absolute bottom-2 right-2 bg-black opacity-60 p-1 rounded-md '> Best</div>
                     </div>
                      <div className='p-3'>
                        
                         <div className="flex justify-between">
                         <h6 className='text-1xl font-medium'>{ele.title}</h6>
                          <div className='pt-1 px-2'> <Rating size='small' color='secondary'  name="read-only" value={ele.rating} readOnly /></div>
                         </div>
                        
                        <div className="flex justify-between my-3">
                        <div className="flex">
                          
                          <img class="rounded-full w-10 h-10" src="https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_640.png" alt="image description"/>
                          <p className='pt-1 px-2' style={{fontSize:'14px'}}>John Doe</p>
                          
                                                   </div>
                               <h6 className='pt-1 px-2'>{ele.price} EGP</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
      ) : (
        <div width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <span class='loader'></span>
        </div>
      )}
    </div>
  );
}
