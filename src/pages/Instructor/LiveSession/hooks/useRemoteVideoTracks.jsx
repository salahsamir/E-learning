import { useRemoteParticipants } from "@livekit/components-react";

const useRemoteVideoTracks = () => {
  const remoteParticipants = useRemoteParticipants();
  const remoteTracks = [];
  remoteParticipants.forEach((participant) => {
    const newTrack = {
      participant: participant,
    };
    participant.videoTracks.forEach((track) => {
      if (track.source === "camera") {
        newTrack.camera = track.track;
      } else if (track.source === "screen_share") {
        newTrack.screen = track.track;
      }
    });
    if (newTrack.camera || newTrack.screen) remoteTracks.push(newTrack);
  });
  return remoteTracks;
};

export default useRemoteVideoTracks;
