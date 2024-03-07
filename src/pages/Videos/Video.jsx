import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import "./Video.css";

import {  Button,Typography,Box} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseApi } from "../../util/BaseApi.js";
import HtmlText from "../../util/HtmlText.js";
export default function Video() {
  let {id, chapter, curriculum} = useParams();
  let [video, setVideo] = useState({});
  let [article,setArticle]=useState({})
  let [parts, setParts] = useState([]);
  let nav = useNavigate();

  useEffect(() => {
    const getAllVideo = async () => {
      try {
        const response = await axios.get(`${BaseApi}/course/${id}/chapter/${chapter}/curriculum/${curriculum}`);
        if (response && response.data) {
          setVideo(response.data.video);
          setArticle(response.data.article);
          // console.log(video,article);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAllParts = async () => {
      try {
        const response = await axios.get(`${BaseApi}/course/${id}/chapter/${chapter}/curriculum/`);
        if (response && response.data) {
          setParts(response.data.curriculum);
          // console.log(parts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllVideo();
    getAllParts();
  }, [id, chapter, curriculum]);

  let  NextVideo = (curriculum) => {
    nav(`/video/${id}/${chapter}/${curriculum}`)
  };

  return (
    <div className="container">
        <div className=" my-4 py-4">
          <div className="row">
      {video ? (
            <div className="col-md-8">
              <div className="player__wrapper py-1">
                <ReactPlayer
                  url={video.url}
                  style={{ maxWidth: "100%" }}
                  width="100%"
                  height="auto"
                  playing={true}
                  controls={true}
                  onError={(e) => console.log('Error:', e)}
                />
              </div>
              <Typography variant="h5" py={1} color={'primary'}>{video.title}</Typography>
            </div>): <div className="col-md-8">
              <div className="py-1">
               <HtmlText  quillContent={article.quillContent} />
              </div>
              <Typography variant="h5" py={1} color={'primary'}>{article.title}</Typography>
            </div>
            
            
            }
            <div className="col-md-4">
              {parts && (
                <>
                  <Typography variant="h4" color={'third'}> {parts.length ? parts.length : 0} Lessons</Typography>
                 {parts.map((item) => (
  <Box key={item._id} cursor="pointer" width="100%" onClick={() => NextVideo(item._id)} display="flex" justifyContent="space-between" my={1}>
    {video?.curriculum === item._id || article?.curriculum === item._id ?
      <Button variant="contained" sx={{ width: '300px' }} p={1}>
        <Typography textAlign='left' color='white'>{item.title}</Typography>
      </Button>
      :
      <Button variant="outlined" sx={{ width: '300px' }} p={1}>
        <Typography textAlign='left' color='white'>{item.title}</Typography>
      </Button>
    }
  </Box>
))}
                </>
              )}
            </div>
          </div>
        </div>
      
    </div>
  );
}




