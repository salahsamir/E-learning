import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button, Typography, Box, Container } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseApi } from "../../util/BaseApi.js";
import HtmlText from "../../util/HtmlText.js";

export default function Video() {
  let { id, chapter, curriculum } = useParams();
  let [video, setVideo] = useState({});
  let [article, setArticle] = useState({});
  let [parts, setParts] = useState([]);
  let nav = useNavigate();
  let [minutesWatched, setMinutesWatched] = useState(0); // State to track minutes watched

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
  }, [id, chapter, curriculum]);

  let NextVideo = (curriculum) => {
    nav(`/video/${id}/${chapter}/${curriculum}`);
  };

  const handleProgress = (progress) => {
    // Progress object contains played, playedSeconds, loaded, loadedSeconds, playedPercent, loadedPercent
    // Update minutesWatched state
    setMinutesWatched(Math.floor(progress.playedSeconds / 60*60));
    console.log(minutesWatched,Math.floor(progress.playedSeconds));
  };

  return (
    <Container>
      <div className="my-4 py-4">
        <div className="row">
          {video ? (
            <div className="col-md-9">
              <Typography variant="p" py={2} color={"style2"}>
                {video.title}
              </Typography>
              <div className="player__wrapper py-1">
                <ReactPlayer
                  url={video.url}
                  style={{ maxWidth: "100%" }}
                  width="100%"
                  height="auto"
                  playing={true}
                  controls={true}
                  onError={(e) => console.log("Error:", e)}
                  onProgress={handleProgress} // Call handleProgress on video progress
                />
              </div>
            </div>
          ) : (
            <div className="col-md-9">
              <div className="py-1">
                <HtmlText quillContent={article.quillContent} />
              </div>
              <Typography variant="h5" py={1} color={"primary"}>
                {article.title}
              </Typography>
            </div>
          )}
          <div className="col-md-3">
            {parts && (
              <>
                <Typography variant="h6" color={"third"}>
                  {parts.length ? parts.length : 0} Lessons
                </Typography>
                {parts.map((item) => (
                  <Box
                    key={item._id}
                    cursor="pointer"
                    width="100%"
                    onClick={() => NextVideo(item._id)}
                    display="flex"
                    justifyContent="space-between"
                    my={1}
                  >
                    {video?.curriculum === item._id ||
                    article?.curriculum === item._id ? (
                      <Button
                        variant="contained"
                        sx={{ width: "300px" }}
                        p={1}
                      >
                        <Typography
                          variant="p"
                          textAlign="left"
                          color="white"
                        >
                          {item.title}
                        </Typography>
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        sx={{ width: "300px" }}
                        p={1}
                      >
                        <Typography textAlign="left" color="white">
                          {item.title}
                        </Typography>
                      </Button>
                    )}
                  </Box>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Display the number of minutes watched */}
      <Typography variant="p" py={1}>
        Minutes Watched: {minutesWatched}
      </Typography>
    </Container>
  );
}
