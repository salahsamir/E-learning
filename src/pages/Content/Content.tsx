import Article from 'Components/Article/Article.tsx'
import Quize from 'Components/Quize/Quize.tsx'
import Video from 'Components/Video/Video.tsx'
import React from 'react'
import { useParams } from 'react-router-dom'
interface IProps{

}
const Content=({}:IProps)=> {

    let {type,id}=useParams()
    console.log(type,id)
    
    if(type==="article"){
        return <Article type={type} id={id}/>
    }
    else if(type==="video"){
        return <Video type={type} id={id}/>
    }
    else if(type==="quiz"){
        return <Quize type={type} id={id}/>
    }
  return (
    <div></div>
  )
}

export default Content