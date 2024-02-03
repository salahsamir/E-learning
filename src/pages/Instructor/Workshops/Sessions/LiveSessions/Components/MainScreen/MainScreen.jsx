import { Box } from "@mui/material";
import StreamController from "./StreamController";
import { useRef } from "react";
import { useTracks } from "@livekit/components-react";
import NoVideoScreen from "./NoVideoScreen/NoVideoScreen";

function MainScreen() {
  const videoElement = useRef(null);
  const tracks = useTracks();
  tracks.forEach((track) => {
    if (track.source === "screen_share") {
      track.participant.tracks.forEach((track) => {
        track.videoTrack.attach(videoElement.current);
      });
    }
  });
  console.log("tracks:", tracks);
  return (
    <Box
      mt="1em"
      borderRadius="8px"
      overflow="hidden"
      position="relative"
      height="calc(100vh - 199px)"
    >
      {tracks.length === 0 ? (
        <NoVideoScreen />
      ) : (
        <video
          ref={videoElement}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      <StreamController videoElement={videoElement} />
    </Box>
  );
}

export default MainScreen;
