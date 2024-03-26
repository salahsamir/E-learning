import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import "./style.css";
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import VolumeButton from "./Components/VolumeButton/index.tsx";
import TimeIndicator from "./Components/TimeIndicator/index.tsx";

export default function VideoPlayer({
  title,
  src,
  poster,
  alt,
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
      <Poster src={poster} alt={alt || "video poster"} />
      <PlyrLayout
        thumbnails={thumbnails}
        icons={{ ...plyrLayoutIcons }}
        style={{
          borderRadius: "0px",
        }}
        invertTime={false}
        slots={{
          afterPlayButton: <TimeIndicator />,
          afterSettings: <VolumeButton />,
        }}
        controls={["play-large", "play", "progress", "settings", "fullscreen"]}
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
