import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import "./style.css";
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

export default function VideoPlayer({
  title,
  src,
  poster,
  subtitles,
  thumbnails,
}) {
  return (
    <MediaPlayer title={title} src={src}>
      <MediaProvider
        style={{
          borderRadius: "0px",
        }}
      />
      <Poster src={poster} />
      <PlyrLayout
        thumbnails={thumbnails}
        icons={plyrLayoutIcons}
        style={{
          borderRadius: "0px",
        }}
        invertTime={false}
        controls={[
          "play-large",
          "play",
          "progress",
          "current-time",
          "duration",
          "settings",
          "mute",
          // "volume",
          "fullscreen",
        ]}
      />
      {subtitles?.map((subtitle) => (
        <Track
          src={subtitle.src}
          kind="subtitles"
          label={subtitle.label}
          lang={subtitle.lang}
        />
      ))}
    </MediaPlayer>
  );
}
