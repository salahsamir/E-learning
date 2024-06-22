
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi';
import HtmlText from 'util/HtmlText';

export default function Articles(props) {
   
   console.log(props)
   
  return (
    <div className='container my-2  m-auto'>
        {/* {article?
         <div className='text-start'>
          <HtmlText description={article} />
         
        </div>


        :"" */}
        }
    </div>
  )
}