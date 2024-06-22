
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi';

export default function Content() {
    const { id,chapter,curriculum ,curriculumTitle,chapterTitle} = useParams();
    const [content, setcontent] = useState();
   
    const [activeAccordion, setActiveAccordion] = useState(null);
    let nav=useNavigate()

  
    const fetchCourses = async () => {

      const { data } = await axios.get(`${BaseApi}/course/${id}/chapter/${chapter}/curriculum/${curriculum}`,{
        headers: {
            token: localStorage.getItem("token"),
        },
      })
      if (data.message === "Done") {
       
        setcontent(data.article);
      }
    };
  
    useEffect(() => {
      fetchCourses();
    
    }, []);
    console.log(content);
  return (
    <div>
        {
            content?
            <>
            <div className="flex justify-center">
          <h2 className='text-center text-1xl text-green-500  mb-3  cursor-pointer' onClick={()=>nav(`/chapter/${id}`)}>{chapterTitle}   ->   </h2>
          <h2 className='text-center text-1xl text-green-500  mb-3  cursor-pointer' onClick={()=>nav(`/curriculum/${id}/${chapter}/${chapterTitle}`)}>   {curriculumTitle}</h2>
          </div>
            
            
            
            </>
            :""





        }
    </div>
  )
}
