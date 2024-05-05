import styled from "@emotion/styled";
import {
  ConnectionQualityIndicator,
  useLocalParticipant,
} from "@livekit/components-react";

const ConnectionIndicator = styled(ConnectionQualityIndicator)(({ theme }) => ({
  position: "absolute",
  top: 16,
  left: 16,
  zIndex: 100,
  "&[data-lk-quality=excellent] svg path": {
    fill: theme.palette.primary.main,
  },
  "&[data-lk-quality=good] svg path": {
    fill: "#dab149",
  },
  "&[data-lk-quality=poor] svg path": {
    fill: theme.palette.error.main,
  },
}));

const ConnectionQuality = () => {
  const { localParticipant } = useLocalParticipant();
  return <ConnectionIndicator participant={localParticipant} />;
};

export default ConnectionQuality;
