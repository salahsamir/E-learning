import { Container } from '@mui/material'
import Buttons from 'Ui/Buttons.tsx'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi'
import HtmlText from 'util/HtmlText'
interface IProps{
type:string,
id:string
}
const Article=({type,id}:IProps)=> {
    let [article,setArticle]=useState()
    let nav=useNavigate()
    let fetchData=async()=>{
        try {
            let res=await axios.get(`${BaseApi}/course/${type}/${id}`)
            if(res.status===200){
                setArticle(res.data.curriculum)
            }
        console.log(res)
        } catch (error) {
            console.log(error);
            
        }
    }
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div className='p-5 container  m-auto'>
    {article?
    <>
     <HtmlText description={article.quillContent} />
       <div className="flex justify-center">
       <Buttons bgColor='bg-green-500'  onClick={()=>nav(-1)}>Complete</Buttons>
       </div>
    </>:""}


    </div>
  )
}

export default Article