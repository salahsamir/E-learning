import { useLocalParticipant } from "@livekit/components-react";

const useLocalVideoTracks = () => {
  const { localParticipant } = useLocalParticipant();
  const tracks = {
    camera: null,
    screen: null,
  };
  localParticipant.videoTracks.forEach((track) => {
    if (track.source === "camera") {
      tracks.camera = track.track;
    } else if (track.source === "screen_share") {
      tracks.screen = track.track;
    }
  });
  return tracks;
};

export default useLocalVideoTracks;
