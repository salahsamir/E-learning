import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi';

export default function Curriculum() {
    const { id,chapter,title } = useParams();
    const [curriculum, setcurriculum] = useState();
   
    const [activeAccordion, setActiveAccordion] = useState(null);
    let nav=useNavigate()

  
    const fetchCourses = async () => {

      const { data } = await axios.get(`${BaseApi}/course/${id}/chapter/${chapter}/curriculum`,{
        headers: {
            token: localStorage.getItem("token"),
        },
      });
      if (data.message === "Done") {
       
        setcurriculum(data.curriculum);
      }
    };
  
    useEffect(() => {
      fetchCourses();
    
    }, []);
   
  return (
    <div className='container my-5  m-auto'>
        <h1 className='text-center text-2xl text-green-500  mb-3  cursor-pointer' onClick={()=>nav(`/chapter/${id}`)}>{title}</h1>

<div id="accordion-collapse" data-accordion="collapse" className="w-1/2 m-auto">
      {curriculum?.map((item, index)  => (
        <div key={index} className="cursor-pointer" onClick={()=>nav(`/article/${id}/${chapter}/${item._id}/${title}/${item.title}`)}>
          <h6 id={`accordion-collapse-heading-${index}`}>
          <div
             
              className="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-md dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 gap-3"
              aria-expanded={activeAccordion === index ? 'true' : 'false'}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span className="text-gray-300">{item.title}</span>

              <div className="flex py-2 ">
                <p className="text-gray-400 mx-2" style={{ fontSize: "14px" }}>{item.type}</p>
               
              </div>
            </div>
          </h6>
         
        </div>
      ))}
    </div>
    </div>
  )
}
