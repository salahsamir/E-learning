import React, { useEffect, useState } from 'react'
import Content from './Content'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseApi } from 'util/BaseApi';
import ReactPlayer from 'react-player';

export default function Video() {
  let { id, chapter, curriculum } = useParams();
 
  let [video, setVideo] = useState({});
  let [article, setArticle] = useState({});
  let [parts, setParts] = useState([]);
  let nav = useNavigate();


  useEffect(() => {
    const getAllVideo = async () => {
      try {
        const response = await axios.get(
          `${BaseApi}/course/${id}/chapter/${chapter}/curriculum/${curriculum}`
        );
        if (response && response.data) {
          setVideo(response.data.video);
          setArticle(response.data.article);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAllParts = async () => {
      try {
        const response = await axios.get(
          `${BaseApi}/course/${id}/chapter/${chapter}/curriculum/`
        );
        if (response && response.data) {
          setParts(response.data.curriculum);
        }
      } catch (error) {
        console.log(error);
      }
    };
   
    getAllVideo();
    getAllParts();
    // console.log(parts)
  }, [id, chapter, curriculum]);

  let NextVideo = (curriculum) => {
    nav(`/video/${id}/${chapter}/${curriculum}`);
  };
 
  return (
<>
 
<div className="container py-4">
  <div className="grid grid-cols-4 gap-4">
    <div className="col-span-3">
      {video?<>
        <h6 className='text-1xl font-bold py-1 '>{video.title}</h6>
      
        <div className="player__wrapper py-1">
                <ReactPlayer
                  url={video.url}
                  style={{ maxWidth: "100%",borderRadius: "50px" }}
                  width="100%"
                  height="auto"
                  playing={true}
                  controls={true}
                  onError={(e) => console.log("Error:", e)}
                   // Call handleProgress on video progress
                />
              </div>
      
      </>:""}


    </div>
    <div className="">
      {parts?<>
        <p className='text-1xl  p-2 '> {parts.length ? parts.length : 0} Lessons (45 m)</p>
        {parts.map((ele) => (
          <div key={ele._id}   onClick={() => NextVideo(ele._id)}>
            {video?.curriculum === ele._id ||
                    article?.curriculum === ele._id ? (
                      <div className="flex justify-between rounded-md p-1 cursor-pointer bg-slate-400 bg-opacity-30" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
     <h6>{ele.title.slice(5, 15)}</h6>
     <p>12:30</p>
                      </div>
                      
                    ): (
                      <div className="flex justify-between p-1 cursor-pointer" >
                      
   <h6>{ele.title.slice(5,20)}</h6>
   <p>12:30</p>
                    </div>
                    )}
          </div>
        ))}

        
      </>:""}
    </div>

  </div>
</div>



</>
  )
}
