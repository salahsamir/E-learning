import { useParticipants } from "@livekit/components-react";

const useVideoTracks = () => {
  /*
    * This hook returns the local and remote video streams
    trackSource: "camera" | "screen_share"
  */
  const participants = useParticipants();
  let remoteTracks = [];
  let localTracks;
  participants?.forEach((participant) => {
    let track = { participant: participant };
    participant.videoTracks?.forEach((track) => {
      track = {
        ...track,
        ...{
          [track.source]: track.track,
        },
      };
    });
    if (participant.isLocal) localTracks = track;
    else remoteTracks.push(track);
  });
  return {
    local: localTracks,
    remote: remoteTracks,
  };
};

export default useVideoTracks;
