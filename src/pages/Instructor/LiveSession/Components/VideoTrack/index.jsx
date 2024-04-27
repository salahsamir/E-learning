import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const Video = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  objectFit: "contain",
}));
const VideoTrack = ({ track, style }) => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      track?.attach(videoRef.current);
    }
  }, [track, videoRef]);
  return <Video autoPlay ref={videoRef} style={style} />;
};
export default VideoTrack;
