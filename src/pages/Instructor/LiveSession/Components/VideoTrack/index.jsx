import { useEffect, useRef } from "react";

const VideoTrack = ({ track, style }) => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      track?.attach(videoRef.current);
    }
  }, [track, videoRef]);
  return (
    <video
      autoPlay
      ref={videoRef}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }}
    />
  );
};
export default VideoTrack;
