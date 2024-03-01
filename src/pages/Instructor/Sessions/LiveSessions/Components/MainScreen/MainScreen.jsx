import { Box } from "@mui/material";
import StreamController from "./StreamController";
import { useEffect, useMemo, useRef } from "react";
import { RoomAudioRenderer, useTracks } from "@livekit/components-react";
import ParticipantsGrid from "../ParticipantsGrid/ParicipantsGrid";
import styled from "@emotion/styled";
import AllowAudio from "../AllowAudio/AllowAudio";
const Video = styled("video")(({ theme }) => ({
  backgroundColor: theme.palette.background.b1,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
function MainScreen() {
  console.log(process.env.REACT_APP_LIVEKIT_SERVER_URL);
  const videoElement = useRef(null);
  const tracks = useTracks();
  const videoTracks = useMemo(() => {
    let localTracks = [];
    let remoteTracks = [];
    tracks.forEach((track) => {
      console.log("track:", track);
      if (track.source !== "microphone") {
        const data = {
          participant: track.participant?.participantInfo,
          track: track.publication.track,
        };
        if (track.participant?.isLocal) {
          localTracks.push(data);
        } else {
          remoteTracks.push(data);
        }
      }
    });
    return { local: localTracks, remote: remoteTracks };
  }, [tracks]);

  useEffect(() => {
    if (videoTracks.remote.length > 0) {
      videoTracks.remote[0].track.attach(videoElement.current);
    }
  }, [videoTracks]);
  console.log("tracks:", tracks);
  return (
    <>
      <RoomAudioRenderer />
      <Box
        mt="1em"
        borderRadius="8px"
        overflow="hidden"
        position="relative"
        height="calc(100vh - 199px)"
      >
        <AllowAudio />
        {videoTracks.remote.length === 0 ? (
          <ParticipantsGrid />
        ) : (
          <Video ref={videoElement} />
        )}

        <StreamController videoElement={videoElement} />
      </Box>
    </>
  );
}

export default MainScreen;
